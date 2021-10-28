import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { VerificationModule } from './verification/verification.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MybuyerModule } from './mybuyer/mybuyer.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_SRV),
    CompanyModule,
    VerificationModule,
    RoleModule,
    UserModule,
    MybuyerModule,
    WarehouseModule,
    VendorModule
  ],
})
export class AppModule {}