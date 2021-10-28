import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as mongoose from "mongoose";
import { Vendor, VendorDocument } from '../schema/vendor.schema';

@Injectable()
export class VendorRepository {

    constructor(@InjectModel(Vendor.name) private vendorModel: Model<VendorDocument>) {}

    async create(vendor: {}): Promise<Vendor> {
        return await this.vendorModel.create(vendor);
    }

    async get(vendorId: string) {
        return await this.vendorModel.findById(vendorId);
    }
}