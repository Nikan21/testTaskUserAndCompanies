import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {}

    async getUserById(id) {
        const user = this.userRepository.findOne({where: {id}})
        return user
    }

    async getUserByEmail(email: string) {
        const user = await this.userRepository.findOne({where: {email}, include: {all: true}})
        return user
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = await this.userRepository.create(createUserDto)
        return user
    }
    
}
