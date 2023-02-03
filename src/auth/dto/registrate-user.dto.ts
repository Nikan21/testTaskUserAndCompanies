import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegistrateUserDto {
    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly firstName: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly lastName: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly nickname: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly phoneNumber: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly position: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly description: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    @IsEmail({}, {message: 'Must be a email format'})
    readonly email: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly password: string;
}