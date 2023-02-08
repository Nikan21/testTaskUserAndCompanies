import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RegistrateUserDto } from '../auth/dto/registrate-user.dto';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {}

    async getUserById(id) {
        const user = this.userRepository.findOne({where: {id}})
        return user
    }

    async updateUserById(id, updateUserDto: UpdateUserDto) {
        const hashPassword = await bcrypt.hash(updateUserDto.password, 5)

        const user = await this.userRepository.update(
            {...updateUserDto, password: hashPassword},
            {where: {id}, returning: true} 
        )
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async createUser(registrateUserDto: RegistrateUserDto) {
        const user = await this.userRepository.create(registrateUserDto)
        return user
    }

    async getCurrentUserId(req) {
        const token = await req.cookies.token
        const dataInToken = await this.jwtService.verify(token)
        const id = dataInToken['id']
        return id
    }
    
}
