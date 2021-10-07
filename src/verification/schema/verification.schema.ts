import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import * as mongoose from 'mongoose'
import { Company } from "../../company/schema/company.schema";

@Schema({versionKey: false, timestamps: true})
export class Verification {
    _id: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
    company_id: Company;

    @Prop()
    documents: [][];
}

export const VerificationSchema = SchemaFactory.createForClass(Verification);
export type VerificationDocument = Verification & Document;