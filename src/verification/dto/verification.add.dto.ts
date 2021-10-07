import { IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class VerificationAddDTO {
    @ApiProperty()
    @IsString()
    company_id: string

    @ApiProperty()
    documents: [][]
}