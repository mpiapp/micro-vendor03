import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanySchema } from 'src/company/schema/company.schema';
import { Mybuyer, MybuyerSchema } from 'src/mybuyer/schema/mybuyer.schema';
import { VendorRepository } from './repository/vendor.repository';
import { Vendor, VendorSchema } from './schema/vendor.schema';
import { VendorController } from './vendor.controller';
import { VendorService } from './vendor.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema } ]),
        MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema } ]),
        MongooseModule.forFeature([{ name: Mybuyer.name, schema: MybuyerSchema } ]),
    ],
    providers: [VendorService, VendorRepository],
    controllers:[VendorController]
})
export class VendorModule {}
