import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async logOutUser() {
        return {
            token: ''
        }
    }

    async loginUser(loginUserDto: LoginUserDto) {
        const user = await this.validateUser(loginUserDto)
        return this.generateToken(user)
    }

    async registrateUser(createUserDto: CreateUserDto) {
        const candidate = await this.usersService.getUserByEmail(createUserDto.email)

        if (candidate) {
            throw new HttpException('Email already registered', HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(createUserDto.password, 5)
        const user = await this.usersService.createUser({...createUserDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user) {
        const payload = {id: user.id, email: user.email}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(loginUserDto: LoginUserDto) {
        const user = await this.usersService.getUserByEmail(loginUserDto.email)
        const passwordEquals = await bcrypt.compare(loginUserDto.password, user.password)

        if (user && passwordEquals) {
            return user
        }

        throw new UnauthorizedException({message: 'Invalid email or password'})
    }
}
