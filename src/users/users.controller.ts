import { Body, Controller, Get, Param, Patch, Req, UseGuards} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Request } from 'express';


@Controller('profile')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
        
    @UseGuards(JwtAuthGuard)
    @Get()
    async getUser(@Req() req: Request) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.usersService.getUserById(id)
    }
     
    @UseGuards(JwtAuthGuard)
    @Patch()
    async updateUser(@Req() req: Request, @Body() updateUserDto: UpdateUserDto) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.usersService.updateUserById(id, updateUserDto)
    }
} 
