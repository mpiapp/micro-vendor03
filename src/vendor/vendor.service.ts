import { Injectable } from '@nestjs/common';
import { vendorDetailAddDTO } from './dto/vendor.detail.add.dto';
import { vendorDetailEditDTO } from './dto/vendor.detail.edit.dto';
import { Vendor } from './schema/vendor.schema';
import { VendorRepository } from './repository/vendor.repository';
import { VendorHelper } from './helper/vendor.helper';
import { vendorRegisterDTO } from './dto/vendor.register.dto';

@Injectable()
export class VendorService {
    constructor(private vendorRepository: VendorRepository, private helper: VendorHelper) {}

    async addVendorDetail(companyDetail: vendorDetailAddDTO): Promise<Vendor> {
       // const companyCode = await this.helper.generateCompanyCode(companyDetail.legal_name);
       // companyDetail.company_code = companyCode;

        return this.vendorRepository.create(companyDetail);
    }

    async AddCompanyDetail(companyDetail:  vendorDetailEditDTO): Promise<Vendor> {
       // if(companyDetail.legal_name) {
       //     const companyCode = await this.helper.generateCompanyCode(companyDetail.legal_name);
       //     companyDetail.company_code = companyCode;
       //     
       // }
      
        return this.vendorRepository.update(companyDetail)
    }

    async AddLegalDocs(legalDocs:  any): Promise<Vendor> {
        
        return this.vendorRepository.update(legalDocs)
    }

    async getCompanyDetail(id: string): Promise<Vendor> {
        return this.vendorRepository.getOne(id)
    }

    async registerVendor(vendorData: vendorRegisterDTO): Promise<Vendor> {
        const companyCode = await this.helper.generateCompanyCode(vendorData.name);
        vendorData.company_code = companyCode;
        return await this.vendorRepository.register(vendorData);
    }

    async getAllVendor(page, limit): Promise<Vendor[]> {
        if(page != undefined) {
            return this.vendorRepository.getPerPage(page - 1, limit);
        }
        return this.vendorRepository.getAll();
    }
}
