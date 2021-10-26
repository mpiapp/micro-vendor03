import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { warehouseAddDTO } from '../dto/warehouse.add.dto';
import { warehouseEditDTO } from '../dto/warehouse.edit.dto';
import { Warehouse, WarehouseDocument } from '../schema/warehouse.schema';

@Injectable()
export class WarehouseRepository {

    constructor(@InjectModel(Warehouse.name) private warehouseModel: Model<WarehouseDocument>) {}

    async create(warehouse: warehouseAddDTO): Promise<Warehouse> {
        return await this.warehouseModel.create(warehouse);
    }

    async update(warehouse: warehouseEditDTO): Promise<Warehouse> {
        return await this.warehouseModel.findOneAndUpdate({_id: warehouse._id}, warehouse, { new: true , useFindAndModify: false});
    }   
}