import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Mybuyer {
    _id: string;
    
    @Prop()
    company_id: string;

    @Prop({unique: true, index: true})
    buyer_id: string;

    @Prop()
    payment_term: string;

    @Prop()
    initial_discount: string;

    @Prop()
    product_discount: string[][];
}

export const MybuyerSchema = SchemaFactory.createForClass(Mybuyer);
export type MybuyerDocument = Mybuyer & Document;