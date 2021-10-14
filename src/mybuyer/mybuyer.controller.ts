import { Controller, Post, Body, BadRequestException, Put, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MybuyerAddDTO } from './dto/mybuyer.add.dto';
import { MybuyerEditDTO } from './dto/mybuyer.edit.dto';
import { MybuyerService } from './mybuyer.service';
import { Mybuyer } from './schema/mybuyer.schema';

@ApiTags('Prefered Buyer List Module')
@Controller('mybuyer')
export class MybuyerController {
    constructor(private readonly mybuyerService: MybuyerService) {}

    @Post()
    async create(@Body() mybuyer: MybuyerAddDTO): Promise<Mybuyer> {
        try {
            return await this.mybuyerService.create(mybuyer);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }

    @Put('/:companyId')
    async update(@Param('companyId') companyId: string, @Body() mybuyer: MybuyerEditDTO): Promise<Mybuyer> {
        try {
            return await this.mybuyerService.update(companyId, mybuyer);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }
}
