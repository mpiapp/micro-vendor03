import { ApiProperty } from "@nestjs/swagger";

export class VendorAddDTO {
    @ApiProperty()
    name: string;

    @ApiProperty()
    company_name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;
}