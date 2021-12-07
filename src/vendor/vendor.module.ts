import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorService } from './vendor.service';
import { Vendor, VendorSchema } from './schema/vendor.schema';
import { VendorController } from './vendor.controller';
import { VendorRepository } from './repository/vendor.repository';
import { VendorHelper } from './helper/vendor.helper';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema } ]),
  ],
  providers: [
    VendorService, 
    VendorRepository, 
    VendorHelper
  ],
  controllers: [VendorController]
}) 
export class VendorModule {}
