import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, UsePipes } from '@nestjs/common';
import { RegistrateUserDto } from 'src/auth/dto/registrate-user.dto';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/logout')
    logOut() {
        return this.authService.logOutUser()
    }

    @UsePipes(ValidationPipe)
    @Post('/signin')
    @Header('Content-Type', 'application/json')
    login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.loginUser(loginUserDto)
    }

    @UsePipes(ValidationPipe)
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    registration(@Body() registrateUserDto: RegistrateUserDto) {
        return this.authService.registrateUser(registrateUserDto)
    }
}
