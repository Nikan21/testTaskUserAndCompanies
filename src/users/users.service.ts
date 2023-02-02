import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RegistrateUserDto } from '../auth/dto/registrate-user.dto';
import { User } from './users.model';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User) {}

    async getUserById(id) {
        const user = this.userRepository.findOne({where: {id}})
        return user
    }

    async updateUserById(id, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.update(
            {...updateUserDto},
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
    
}
