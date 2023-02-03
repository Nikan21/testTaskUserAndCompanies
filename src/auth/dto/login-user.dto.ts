import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Must be a email format'})
    readonly email: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly password: string;
}