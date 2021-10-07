import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { VerificationAddDTO } from "../dto/verification.add.dto";
import { Verification, VerificationDocument } from "../schema/verification.schema";

@Injectable()
export class VerificationRepository {

    constructor(@InjectModel(Verification.name) private verificationModel: Model<Verification>) {}

    async create(verification: VerificationAddDTO): Promise<Verification> {
        return await this.verificationModel.create(verification)
    }
}