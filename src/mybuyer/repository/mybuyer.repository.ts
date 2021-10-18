import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { MybuyerAddDTO } from "../dto/mybuyer.add.dto";
import { MybuyerEditDTO } from "../dto/mybuyer.edit.dto";
import { Mybuyer, MybuyerDocument } from "../schema/mybuyer.schema";

@Injectable()
export class MybuyerRepository {
    constructor(@InjectModel(Mybuyer.name) private mybuyerModel: Model<MybuyerDocument>) {}

    async create(mybuyer: MybuyerAddDTO): Promise<Mybuyer> {
        return await this.mybuyerModel.create(mybuyer);
    }

    async upate(mybuyer: MybuyerEditDTO): Promise<Mybuyer> {
        return await this.mybuyerModel.findByIdAndUpdate({company_id: mybuyer.company_id}, mybuyer);
    }
}