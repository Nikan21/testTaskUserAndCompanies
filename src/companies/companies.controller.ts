import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from 'src/users/users.service';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller()
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService, private usersService: UsersService) {}

    @Get('companies')
    async getAll(@Req() req: Request) {
        console.log(req.headers)
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.getAllCompanies(id)
    }

    @Post('/createcompany')
    async create(@Body() createCompanyDto: CreateCompanyDto, @Req() req: Request) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.createCompany(createCompanyDto, id)
    }

    @Get('company/:id')
    get(@Param('id') id) {
        return this.companiesService.getCompanyById(id)
    }

    @Patch('company/:id')
    update(@Param('id') id, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companiesService.updateCompanyById(id, updateCompanyDto)
    }

    @Delete('company/:id')
    remove(@Param('id') id) {
        return this.companiesService.removeCompanyById(id)
    }
}
