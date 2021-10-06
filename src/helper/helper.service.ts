import { Injectable } from "@nestjs/common";
import { CompanyRepository } from "src/company/repository/company.repository";

@Injectable()
export class HelperService {
    constructor(private companyRepository: CompanyRepository) {}

    createAbbr(companyName: string) {
        const abbr = companyName.replace(/[^A-Za-z]/g, '')
                    .replace(/PT|CV|MV|UD|/g, '')
                    .substring(0, 3)
                    .toUpperCase();
        return abbr;
    }

    async generateCompanyCode(companyName: string) {
        const companyAbbr = this.createAbbr(companyName);
        const similarAbbrObj = await this.companyRepository.getCompanyCodeLike(companyAbbr);
        const similarAbbr    = similarAbbrObj?.company_code || null;
        const lastID = parseInt(similarAbbr?.substr(-2)) || 0;
        const incID = ('0' + (lastID + 1)).slice(-2)
        const companyCode =  companyAbbr + incID;

        return companyCode;
    }
}