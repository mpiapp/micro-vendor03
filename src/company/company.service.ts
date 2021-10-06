import { Injectable } from '@nestjs/common';
import { companyDetailAddDTO } from './dto/company.detail.add.dto';
import { companyDetailEditDTO } from './dto/company.detail.edit.dto';
import { Company } from './schema/company.schema';
import { CompanyRepository } from './repository/company.repository';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class CompanyService {
    constructor(private companyRepository: CompanyRepository, private helper: HelperService) {}

    async addCompanyDetail(companyDetailAddDTO: companyDetailAddDTO): Promise<Company> {
        const companyDetail = companyDetailAddDTO;
        const companyCode = await this.helper.generateCompanyCode(companyDetail.legal_name);
        companyDetail.company_code = companyCode;

        return await this.companyRepository.create(companyDetail);
    }

    async editCompanyDetail(id: string, companyDetailEditDTO:  companyDetailEditDTO): Promise<Company> {
        return await this.companyRepository.update(id, companyDetailEditDTO)
    }

    async getCompanyDetail(id: string): Promise<Company> {
        return await this.companyRepository.getOne(id)
    }

    async getAllCompany(): Promise<Company[]> {
        return await this.companyRepository.getAll();
    }
}
