import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller()
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService, private usersService: UsersService) {}
        
    @UseGuards(JwtAuthGuard)
    @Get('companies')
    async getAll(@Req() req: Request) {
        console.log(req.headers)
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.getAllCompanies(id)
    }
        
    @UseGuards(JwtAuthGuard)
    @Post('/createcompany')
    async create(@Body() createCompanyDto: CreateCompanyDto, @Req() req: Request) {
        const id = await this.usersService.getCurrentUserId(req)
        return this.companiesService.createCompany(createCompanyDto, id)
    }

    @UseGuards(JwtAuthGuard)
    @Get('company/:id')
    get(@Param('id') id) {
        return this.companiesService.getCompanyById(id)
    }

    @UseGuards(JwtAuthGuard)
    @Patch('company/:id')
    update(@Param('id') id, @Body() updateCompanyDto: UpdateCompanyDto) {
        return this.companiesService.updateCompanyById(id, updateCompanyDto)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('company/:id')
    remove(@Param('id') id) {
        return this.companiesService.removeCompanyById(id)
    }
}
