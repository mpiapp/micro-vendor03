import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { companyDetailAddDTO } from './dto/company.detail.add.dto';
import { companyDetailEditDTO } from './dto/company.detail.edit.dto';
import { Company, CompanyDocument } from './schema/company.schema';
import { StrGenerate  } from '../utils/str.generate';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company.name) private readonly companyModel: Model<CompanyDocument>) {}
    
    async getSimilarAbbr(companyName: string) {
        const companyAbbr = StrGenerate.companyAbbr(companyName);

        return await this.companyModel
                    .find({company_code: {$regex: companyAbbr, $options: 'i'} })
                    .sort({$natural:-1})
                    .limit(1);
    }

    async addCompanyDetail(companyDetailAddDTO: companyDetailAddDTO): Promise<Company> {
        const companyDetail = companyDetailAddDTO;
        const legalName     = companyDetail.legal_name;
        const lastRecordObj = await this.getSimilarAbbr(companyDetail.legal_name);
        const lastRecord    = lastRecordObj.length !== 0 ? lastRecordObj[0].company_code : '0';
        
        try {
            companyDetail.company_code = StrGenerate.companyCode(lastRecord, legalName);
            return await this.companyModel.create(companyDetail);
        }
        catch(e) {
            return e;
        }
    }

    async editCompanyDetail(id: string, companyDetailEditDTO:  companyDetailEditDTO): Promise<Company | boolean> {
        const companyDetail = companyDetailEditDTO;

        try {
			return await this.companyModel.findOneAndUpdate({ _id: id }, companyDetail, { new: true , useFindAndModify: false})
		}
		catch(e) {
			return e;
		}
    }
}
