import { ApiProperty } from "@nestjs/swagger"

export class MybuyerDeleteDTO {
    @ApiProperty()
    company_id: string;

    @ApiProperty()
    buyer_id: string; 
    
    isDeleted: boolean;

    deletedAt: Date;
}