import { Body, Controller, Get, Header, HttpCode, HttpStatus, Post, Res, UsePipes } from '@nestjs/common';
import { RegistrateUserDto } from 'src/auth/dto/registrate-user.dto';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Response } from 'express';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/logout')
    logOut(@Res({passthrough: true}) res: Response) {
        res.cookie('token', '')
        return ''
    }

    @UsePipes(ValidationPipe)
    @Post('/signin')
    @Header('Content-Type', 'application/json')
    async login(@Body() loginUserDto: LoginUserDto, @Res({passthrough: true}) res: Response) {
        const token = await this.authService.loginUser(loginUserDto)
        res.cookie('token', `${token}`)
        return token
    }

    @UsePipes(ValidationPipe)
    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    @Header('Content-Type', 'application/json')
    async registration(@Body() registrateUserDto: RegistrateUserDto, @Res({passthrough: true}) res: Response) {
        const token = await this.authService.registrateUser(registrateUserDto)
        res.cookie('token', `${token}`)
        return token
    }
}
