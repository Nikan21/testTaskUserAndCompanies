import { Controller, Get, Param} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/profile:id')
    getUser(@Param('id') id) {
        return this.usersService.getUserById(id)
    }

    
}
