import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
//import { Mybuyer, MybuyerDocument } from 'src/mybuyer/schema/mybuyer.schema';
import { VendorAddDTO } from './dto/vendor.add.dto';
import { VendorRepository } from './repository/vendor.repository';

@Injectable()
export class VendorService {
    constructor(
        private readonly vendorRepository: VendorRepository,
        //@InjectModel(Mybuyer.name) private mybuyerModel: Model<MybuyerDocument>,
    ) {}

    async get(id: string) {
        //return await this.mybuyerModel.findOne({_id: id}).populate('company_id');
        return await this.vendorRepository.get(id);
    }

    async create(vendor: VendorAddDTO) {
        //create vendor , get vendor id.
        const vendorObj = {
            'name': vendor.company_name
        }

        const newVendor = await this.vendorRepository.create(vendorObj);

        //Call User register micro Service here


        // add owner as user with role owner



        return newVendor;
    }
}

