import { IsNotEmpty } from 'class-validator';

export class vendorRegisterDTO {
    @IsNotEmpty()
    name: string;
}

