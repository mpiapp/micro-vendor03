import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { VerificationModule } from './verification/verification.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { MybuyerModule } from './mybuyer/mybuyer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_SRV),
    CompanyModule,
    VerificationModule,
    RoleModule,
    UserModule,
    MybuyerModule,
  ],
})
export class AppModule {}