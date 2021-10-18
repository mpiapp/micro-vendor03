import { ApiProperty } from "@nestjs/swagger";

export class companyListDTO {
    @ApiProperty()
    page: number;

    @ApiProperty()
    limit: number;
}

