import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema({versionKey: false, strict: "throw"})
export class Company {
    @Prop()
    type: string;

    @Prop()
    category: string;

    @Prop()
    legal_name: string;

    @Prop()
    alias_name: string;

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

    @Prop()
    email: string;

    @Prop()
    website: string;

    @Prop()
    instagram: string;

    @Prop()
    facebook: string;

    @Prop()
    twitter: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
export type CompanyDocument = Company & Document;