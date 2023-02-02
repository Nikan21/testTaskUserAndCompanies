import { Controller, Get, Param} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('profile')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get(':id')
    getUser(@Param('id') id) {
        return this.usersService.getUserById(id)
    }

    
}
