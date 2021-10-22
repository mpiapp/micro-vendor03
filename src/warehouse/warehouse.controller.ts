import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { warehouseAddDTO } from './dto/warehouse.add.dto';
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
}
