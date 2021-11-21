import { Controller, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Vendor Setting')
@Controller('setting')
export class SettingController {
    
    @Get('/:vendorId') 
    async getAll(@Param('vendorId') vendorId: string) {
        return vendorId;
    }

    @Get('/:vendorId/:param') 
    async getByParam(@Param('vendorId') vendorId: string, @Param('param') key: string) {
        return vendorId;
    }
}
