import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";
import { VerificationStatus } from "../company.enum";

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Company {
    _id: string;
    
    @Prop({unique: true, index: true})
    company_code: string;

    @Prop()
    type: string;

    @Prop()
    category: string;

    @Prop({unique: true, index: true})
    legal_name: string;

    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    longitude: string;

    @Prop()
    latitude: string;

    @Prop()
    phone: string;

    @Prop()
    whatsapp: string;

    @Prop({unique: true, index: true})
    email: string;

    @Prop()
    website: string;

    @Prop()
    instagram: string;

    @Prop()
    facebook: string;

    @Prop()
    twitter: string;

    @Prop({default: VerificationStatus.UNVERIFIED})
    verification_status: string;

    @Prop({default: false})
    isDeleted: boolean;

    @Prop({default: null})
    deletedAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
export type CompanyDocument = Company & Document;