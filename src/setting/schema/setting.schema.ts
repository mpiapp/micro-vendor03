import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document, Types } from "mongoose";
import * as mongoose from 'mongoose';

@Schema({versionKey: false, strict: "throw",  timestamps: true})
export class Setting {
    _id: string;
    
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Vendor'})
    vendor: Types.ObjectId;

    @Prop()
    setting: string;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);
export type SettingDocument = Setting & Document;