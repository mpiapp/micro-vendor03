import { IsNotEmpty, IsEmail, IsUrl, IsNumber } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
import { isInt16Array } from 'util/types';

export class companyDetailAddDTO {
    company_code: string;

    @ApiProperty()
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    category: number;

    @ApiProperty()
    @IsNotEmpty()
    legal_name: string;

    @ApiProperty()
    @IsNotEmpty()
    alias_name: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    longitude: string;

    @ApiProperty()
    @IsNotEmpty()
    latitude: string;

    @ApiProperty()
    @IsNotEmpty()
    phone: string;

    @ApiProperty()
    whatsapp: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsUrl()
    website: string;

    @ApiProperty()
    instagram: string;

    @ApiProperty()
    facebook: string;

    @ApiProperty()
    twitter: string;
}

