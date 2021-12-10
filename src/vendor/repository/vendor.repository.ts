import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { vendorDetailAddDTO } from '../dto/vendor.detail.add.dto';
import { vendorDetailEditDTO } from '../dto/vendor.detail.edit.dto';
import { vendorRegisterDTO } from '../dto/vendor.register.dto';
import { Vendor, VendorDocument } from '../schema/vendor.schema';

@Injectable()
export class VendorRepository {

    constructor(@InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>) {}

    async register(vendorData: any): Promise<Vendor> {
      
        return await this.vendorModel.create(vendorData);
    }

    async getAll(): Promise<Vendor[]> {
        return await this.vendorModel.find();
    }

    async create(vendorDetail: vendorDetailAddDTO): Promise<Vendor> {
        return await this.vendorModel.create(vendorDetail);
    }

    async update(vendorDetail: vendorDetailEditDTO): Promise<Vendor> {
        return await this.vendorModel.findOneAndUpdate({ _id: vendorDetail._id }, { vendorDetail }, { new: true , useFindAndModify: false})
    }

    async getOne(id: string): Promise<Vendor> {
        return await this.vendorModel.findById({ _id: id });
    }

    

    async getPerPage(page: number, limit: number): Promise<Vendor[]> {
        return await this.vendorModel
                    .find()
                    .skip(Number(page) * Number(limit))
                    .limit(Number(limit));
    }

    async getSimilarCompanyCode(keyword: string) {
        return await this.vendorModel
                    .findOne({company_code: {$regex: keyword, $options: 'i'} })
                    .select('company_code')
                    .sort({$natural:-1})
                    .limit(1);
    }
    
}