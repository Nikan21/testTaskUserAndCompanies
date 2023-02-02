import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './users.model';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {}

    async loginUser(loginUserDto: LoginUserDto) {
        const user = await this.validateUser(loginUserDto)
        return this.generateToken(user)
    }

    async registrateUser(createUserDto: CreateUserDto) {
        const candidate = await this.getUserByEmail(createUserDto.email)

        if (candidate) {
            throw new HttpException('Email already registered', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(createUserDto.password, 5)
        const user = await this.createUser({...createUserDto, password: hashPassword})
        return this.generateToken(user)
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto)
        return user
    }

    private async generateToken(user) {
        const payload = {id: user.id, email: user.email}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(loginUserDto: LoginUserDto) {
        const user = await this.getUserByEmail(loginUserDto.email)
        const passwordEquals = await bcrypt.compare(loginUserDto.password, user.password)

        if (user && passwordEquals) {
            return user
        }

        throw new UnauthorizedException({message: 'Invalid email or password'})
    }
}
