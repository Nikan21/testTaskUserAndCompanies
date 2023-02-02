import { Body, Controller, Get, Param, Patch} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('profile')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    getUser(@Param('id') id) {
        return this.usersService.getUserById(id)
    }
     
    @Patch(':id')
    updateUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUserById(id, updateUserDto)
    }
}
