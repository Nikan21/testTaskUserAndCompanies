import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';

@Controller()
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) {}

    @Get('componies')
    getAll() {

    }

    @Post('/createcompany')
    create(@Body() createCompanyDto: CreateCompanyDto) {
        return this.companiesService.createCompany(createCompanyDto)
    }
}
