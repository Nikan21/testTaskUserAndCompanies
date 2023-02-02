import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './companies.model';
import { CreateCompanyDto } from './dto/create-company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Company) private companyRepository: typeof Company) {}

    async getAllCompanies(id) {
        const companies = await this.companyRepository.findAll({include: {all: true}, where: {userId: id}})
        return companies
    }

    async createCompany(createCompanyDto: CreateCompanyDto, id) {
        const company = await this.companyRepository.create({...createCompanyDto, userId: id})
        return company;
    }
}
