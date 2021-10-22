import { Injectable } from '@nestjs/common';
import { warehouseAddDTO } from './dto/warehouse.add.dto';
import { WarehouseRepository } from './repository/warehouse.repository';
import { Warehouse } from './schema/warehouse.schema';

@Injectable()
export class WarehouseService {
    constructor(private warehouseRepository: WarehouseRepository) {}

    async create(warehouse: warehouseAddDTO): Promise<Warehouse> {
        return await this.warehouseRepository.create(warehouse);
    }
}
