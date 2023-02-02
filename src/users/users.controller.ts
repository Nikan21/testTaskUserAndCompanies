import { Body, Controller, Header, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from './users.service';

@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('/signin')
    @Header('Content-Type', 'application/json')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.usersService.loginUser(loginUserDto)
    }

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    registration(@Body() createUserDto: CreateUserDto) {
        return this.usersService.registrateUser(createUserDto)
    }
}
