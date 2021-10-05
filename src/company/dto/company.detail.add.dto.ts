import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class companyDetailAddDTO {
    @ApiProperty()
    @IsNotEmpty()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    category: string;

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
    email: string;

    @ApiProperty()
    website: string;

    @ApiProperty()
    instagram: string;

    @ApiProperty()
    facebook: string;

    @ApiProperty()
    twitter: string;
}
