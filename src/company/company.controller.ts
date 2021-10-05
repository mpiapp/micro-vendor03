import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { companyDetailAddDTO } from './dto/company.detail.add.dto';
import { Company } from './schema/company.schema';

@Controller('company')
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post()
    async addProduct(@Body() companyDetailAdd: companyDetailAddDTO): Promise<Company> {
		return await this.companyService.addCompanyDetail(companyDetailAdd);
	}
}
