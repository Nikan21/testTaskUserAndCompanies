import { IsNotEmpty, IsString } from "class-validator";

export class CreateCompanyDto {
    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly name: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly address: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly serviceOfActivity: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly numberOfEmployess: string;

    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly description: string;
    
    @IsNotEmpty({message: 'Must be not empty'})
    @IsString({message: 'Must be a string'})
    readonly type: string;
} 