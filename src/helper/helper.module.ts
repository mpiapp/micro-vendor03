import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyRepository } from '../company/repository/company.repository';
import { Company, CompanySchema } from '../company/schema/company.schema';
import { HelperService } from './helper.service';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema } ]),
    ],
    providers: [
        HelperService, 
        CompanyRepository
    ],
    exports: [HelperService]
})
export class HelperModule {}
