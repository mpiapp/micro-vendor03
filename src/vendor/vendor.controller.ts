import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VendorAddDTO } from './dto/vendor.add.dto';
import { VendorDTO } from './dto/vendor.dto';
import { VendorService } from './vendor.service';

@ApiTags('Vendor Module')
@Controller('vendor')
export class VendorController {

    constructor(private readonly vendorService: VendorService) {}

    @Get('/:vendorId')
    async get(@Param('vendorId') vendorId: string) {

        return await this.vendorService.get(vendorId);
    } 
    
    @Post()
    async create(@Body() vendor: VendorAddDTO) {
        return await this.vendorService.create(vendor);
    }
}
