import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller()
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService, private usersService: UsersService) {}

    @Get('companies')
    async getAll(@Req() req: Request) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.getAllCompanies(id)
    }

    @Post('/createcompany')
    async create(@Body() createCompanyDto: CreateCompanyDto, @Req() req: Request) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.createCompany(createCompanyDto, id)
    }
}
