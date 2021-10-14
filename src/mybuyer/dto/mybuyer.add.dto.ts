import { ApiProperty } from "@nestjs/swagger"

export class MybuyerAddDTO {
    @ApiProperty()
    company_id: string;

    @ApiProperty()
    buyer_id: string;

    @ApiProperty()
    payment_term: string;

    @ApiProperty()
    initial_discount: string;

    @ApiProperty()
    product_discount: string[][];
}