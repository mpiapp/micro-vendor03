import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class RoleAddDTO {
    code: string;

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    permission: any;
}

