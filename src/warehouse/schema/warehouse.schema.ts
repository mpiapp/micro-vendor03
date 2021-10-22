import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Warehouse {
    _id: string;
    
    @Prop()
    vendor_id: string;

    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    email: string;
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
export type WarehouseDocument = Warehouse & Document;