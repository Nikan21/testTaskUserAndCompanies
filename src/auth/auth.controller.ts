import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegistrateUserDto } from 'src/auth/dto/registrate-user.dto';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/logout')
    logOut() {
        return this.authService.logOutUser()
    }

    @Post('/signin')
    @Header('Content-Type', 'application/json')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.loginUser(loginUserDto)
    }

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    registration(@Body() registrateUserDto: RegistrateUserDto) {
        return this.authService.registrateUser(registrateUserDto)
    }
}
