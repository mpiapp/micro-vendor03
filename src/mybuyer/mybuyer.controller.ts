import { Controller, Post, Body, BadRequestException, Put, Param, Delete, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MybuyerAddDTO } from './dto/mybuyer.add.dto';
import { MybuyerDeleteDTO } from './dto/mybuyer.delete.dto';
import { MybuyerEditDTO } from './dto/mybuyer.edit.dto';
import { MybuyerService } from './mybuyer.service';
import { Mybuyer } from './schema/mybuyer.schema';

@ApiTags('Prefered Buyer List Module')
@Controller('mybuyer')
export class MybuyerController {
    constructor(private readonly mybuyerService: MybuyerService) {}

    @Get()
    async getAll(): Promise<Mybuyer[]> {
        return await this.mybuyerService.getAll();
    }

    @Get('/:company_id')
    async getbyVendor(@Param('company_id') company_id: string): Promise<Mybuyer[]> {
        try {
            return await this.mybuyerService.getbyVendor(company_id);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }


    @Get('/:company_id/:buyer_id')
    async getbyBuyer(@Param('company_id') company_id: string, @Param('buyer_id') buyer_id: string): Promise<Mybuyer> {
        try {
            return await this.mybuyerService.getbyBuyer(company_id, buyer_id);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }

    @Post()
    async create(@Body() mybuyer: MybuyerAddDTO): Promise<Mybuyer> {
        try {
            return await this.mybuyerService.create(mybuyer);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }

    @Put()
    async update(@Body() mybuyer: MybuyerEditDTO): Promise<Mybuyer> {
        try {
            return await this.mybuyerService.update(mybuyer);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }

    @Delete()
    async delete(@Body() mybuyer: MybuyerDeleteDTO): Promise<{}> {

        mybuyer.isDeleted = true;
        mybuyer.deletedAt = new Date;
        try {
            return await this.mybuyerService.delete(mybuyer);
        }
        catch(exception) {
            throw new BadRequestException(exception.message)
        }
    }
}
