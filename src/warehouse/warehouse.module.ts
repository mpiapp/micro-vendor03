import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseController } from './warehouse.controller';
import { WarehouseRepository } from './repository/warehouse.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Warehouse, WarehouseSchema } from './schema/warehouse.schema';

@Module({
imports: [
    MongooseModule.forFeature([{ name: Warehouse.name, schema: WarehouseSchema } ]),
    ],
  providers: [
    WarehouseRepository,  
    WarehouseService
],
  controllers: [WarehouseController]
})
export class WarehouseModule {}
