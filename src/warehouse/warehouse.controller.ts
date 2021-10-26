import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { warehouseAddDTO } from './dto/warehouse.add.dto';
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
}
