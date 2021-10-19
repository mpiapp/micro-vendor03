import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from './company.service';
import { Company, CompanySchema } from './schema/company.schema';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './repository/company.repository';
import { CompanyHelper } from './helper/company.helper';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema } ]),
  ],
  providers: [
    CompanyService, 
    CompanyRepository, 
    CompanyHelper
  ],
  controllers: [CompanyController]
}) 
export class CompanyModule {}
