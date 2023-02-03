import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class UpdateUserDto {
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
    @IsNumber({}, {message: 'Must be a number'})
    readonly phoneNumber: number;

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