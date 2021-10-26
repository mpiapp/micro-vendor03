import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { warehouseAddDTO } from './dto/warehouse.add.dto';
import { warehouseDeleteDTO } from './dto/warehouse.delete.dto';
import { warehouseEditDTO } from './dto/warehouse.edit.dto';
import { Warehouse } from './schema/warehouse.schema';
import { WarehouseService } from './warehouse.service';

@ApiTags('Warehouse Module')
@Controller('warehouse')
export class WarehouseController {
    constructor(private warhouseService: WarehouseService) {}

    @Post()
    async create(@Body() warehouse: warehouseAddDTO): Promise<Warehouse> {
        return this.warhouseService.create(warehouse);
    }

    @Put()
    async update(@Body() warehouse: warehouseEditDTO): Promise<Warehouse> {
        return this.warhouseService.update(warehouse);
    }

    @Delete()
    async delete(@Body() warehouse: warehouseDeleteDTO): Promise<{}> {

        warehouse.isDeleted = true;
        warehouse.deletedAt = new Date;

        return await this.warhouseService.delete(warehouse);
    }

    @Get('/:id') 
    async get(@Param('id') id: string): Promise<Warehouse> {
        return this.warhouseService.get(id);
    }
}
