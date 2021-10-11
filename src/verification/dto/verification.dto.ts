import { ApiProperty } from "@nestjs/swagger";

export class VerificationDTO {
    @ApiProperty()
    company_id: string;

    @ApiProperty()
    documents: [][];
}