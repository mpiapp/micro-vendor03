import { Injectable } from '@nestjs/common';
import { warehouseAddDTO } from './dto/warehouse.add.dto';
import { warehouseDeleteDTO } from './dto/warehouse.delete.dto';
import { warehouseEditDTO } from './dto/warehouse.edit.dto';
import { WarehouseRepository } from './repository/warehouse.repository';
import { Warehouse } from './schema/warehouse.schema';

@Injectable()
export class WarehouseService {
    constructor(private warehouseRepository: WarehouseRepository) {}

    async create(warehouse: warehouseAddDTO): Promise<Warehouse> {
        return await this.warehouseRepository.create(warehouse);
    }

    async update(warehouse: warehouseEditDTO): Promise<Warehouse> {
        return await this.warehouseRepository.update(warehouse);
    }

    async delete(warehouse: warehouseDeleteDTO): Promise<{}> {
        return await this.warehouseRepository.delete(warehouse);
    }
}
