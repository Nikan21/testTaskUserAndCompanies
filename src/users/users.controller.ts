import { Body, Controller, Get, Param, Patch, UseGuards} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('profile')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
        
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    getUser(@Param('id') id) {
        return this.usersService.getUserById(id)
    }
     
    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    updateUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUserById(id, updateUserDto)
    }
}
