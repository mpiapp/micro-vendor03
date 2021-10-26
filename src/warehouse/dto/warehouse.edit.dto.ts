import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class warehouseEditDTO {
    @ApiProperty()
    @IsNotEmpty()
    _id: string;


    @ApiProperty()
    @IsNotEmpty()
    vendor_id: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    phone: string;

    @ApiProperty()
    email: string;
}

