import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose";
import * as mongoose from 'mongoose';
import { Company } from "../../company/schema/company.schema";

@Schema({versionKey: false, timestamps: true})
export class Verification {
    _id: string;
    
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company', unique: true, index: true })
    // company_id: Company;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        unique: true, 
        index: true 
      })
      company_id: Types.ObjectId;

    @Prop()
    documents: [][];
}

export const VerificationSchema = SchemaFactory.createForClass(Verification);
export type VerificationDocument = Verification & Document;