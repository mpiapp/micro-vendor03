import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { warehouseAddDTO } from '../dto/warehouse.add.dto';
import { warehouseDeleteDTO } from '../dto/warehouse.delete.dto';
import { warehouseEditDTO } from '../dto/warehouse.edit.dto';
import { Warehouse, WarehouseDocument } from '../schema/warehouse.schema';

@Injectable()
export class WarehouseRepository {

    constructor(@InjectModel(Warehouse.name) private warehouseModel: Model<WarehouseDocument>) {}

    async create(warehouse: warehouseAddDTO): Promise<Warehouse> {
        return await this.warehouseModel.create(warehouse);
    }

    async update(warehouse: warehouseEditDTO): Promise<Warehouse> {
        return await this.warehouseModel.findOneAndUpdate({_id: warehouse._id}, { warehouse }, { new: true , useFindAndModify: false});
    }  
    
    async delete(warehouse: warehouseDeleteDTO): Promise<{}> {
        const docs =  await this.warehouseModel.findOneAndUpdate({ _id : warehouse._id, isDeleted: { "$ne": true } }, { warehouse });
        if(!docs?._id) {
            throw new BadRequestException('Document not exists');
        }

        return {
            "statusCode": 200,
            "message": "Success. Document has been deleted",
          }
    }

    async get(id: string): Promise<Warehouse> {
        return await this.warehouseModel.findOne({_id: id, isDeleted: { "$ne": true } });
    }

    async getByVendor(vendorId: string): Promise<Warehouse[]> {
        return await this.warehouseModel.find({vendor_id: vendorId, isDeleted: { "$ne": true } });
    }
}