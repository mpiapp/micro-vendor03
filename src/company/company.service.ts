import { Injectable } from '@nestjs/common';
import { companyDetailAddDTO } from './dto/company.detail.add.dto';
import { companyDetailEditDTO } from './dto/company.detail.edit.dto';
import { Company } from './schema/company.schema';
import { StrGenerate  } from '../utils/str.generate';
import { CompanyRepository } from './repository/company.repository';

@Injectable()
export class CompanyService {
    constructor(private companyRepository: CompanyRepository) {}

    async addCompanyDetail(companyDetailAddDTO: companyDetailAddDTO): Promise<Company> {
        try {
            const legalName = companyDetailAddDTO.legal_name;
            const legalNameAbbr = StrGenerate.companyAbbr(legalName);
            const similarAbbrObj = await this.companyRepository.getCompanyCodeLike(legalNameAbbr);
            const similarAbbr = similarAbbrObj !== null ? similarAbbrObj.company_code : '0';

            companyDetailAddDTO.company_code = StrGenerate.companyCode(similarAbbr, legalName); 
            
            return await this.companyRepository.create(companyDetailAddDTO);
        }
        catch(err) {
            return err;
        }
    }

    async editCompanyDetail(id: string, companyDetailEditDTO:  companyDetailEditDTO): Promise<Company> {
        try {
			return await this.companyRepository.update(id, companyDetailEditDTO)
		}
		catch(err) {
			return err;
		}
    }

    async getCompanyDetail(id: string): Promise<Company> {
        try {
			return await this.companyRepository.getOne(id)
		}
		catch(err) {
			return err;
		}
    }

    async getAllCompany(): Promise<Company[]> {
        try {
			return await this.companyRepository.getAll();
		}
		catch(err) {
			return err;
		}
    }
}
