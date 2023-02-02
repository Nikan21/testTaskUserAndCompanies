import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { CompaniesController } from './companies.controller';
import { Company } from './companies.model';
import { CompaniesService } from './companies.service';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [SequelizeModule.forFeature([Company, User])]
})
export class CompaniesModule {}
