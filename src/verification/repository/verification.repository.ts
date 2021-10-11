import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VerificationDTO } from "../dto/verification.dto";
import { Verification, VerificationDocument } from "../schema/verification.schema";

@Injectable()
export class VerificationRepository {

    constructor(@InjectModel(Verification.name) private verificationModel: Model<VerificationDocument>) {}

    async createOrUpdate(body: VerificationDTO): Promise<Verification> {
        return await this.verificationModel.findOneAndUpdate({ _id: body.company_id }, body, { new: true, upsert: true})
    }

    async getVerificationData(id: string) {
        return await this.verificationModel.findById({ _id: id });
    }
}