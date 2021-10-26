import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class warehouseDeleteDTO {
    @ApiProperty()
    _id: string;
    
    isDeleted: boolean;

    deletedAt: Date;
}

