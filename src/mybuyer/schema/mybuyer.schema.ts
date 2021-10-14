import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose";
import * as mongoose from 'mongoose';

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Mybuyer {
    _id: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
    company_id: Types.ObjectId;

    @Prop({unique: true, index: true})
    buyer_id: string;

    @Prop()
    payment_term: string;

    @Prop()
    initial_discount: number;

    @Prop()
    product_discount: object[];
}

export const MybuyerSchema = SchemaFactory.createForClass(Mybuyer);
export type MybuyerDocument = Mybuyer & Document;