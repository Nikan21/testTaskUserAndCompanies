import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './companies.model';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Company) private companyRepository: typeof Company) {}

    async getAllCompanies() {
        const companies = await this.companyRepository.findAll({include: {all: true}})
        return companies
    }

    async createCompany(createCompanyDto: CreateCompanyDto) {
        const company = await this.companyRepository.create(createCompanyDto)
        return company;
    }
}
