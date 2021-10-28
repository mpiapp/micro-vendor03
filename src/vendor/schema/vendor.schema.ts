import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose";
import { VerificationStatus } from "../vendor.enum";
import * as mongoose from 'mongoose';

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Vendor {
    _id: string;

    @Prop()
    name: string

    @Prop({default: VerificationStatus.UNVERIFIED})
    status: string
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    company: Types.ObjectId;

    @Prop({default: false})
    isDeleted: boolean;

    @Prop({default: null})
    deletedAt: Date;
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);
export type VendorDocument = Vendor & Document;