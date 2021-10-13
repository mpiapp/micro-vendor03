import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyModule } from './company/company.module';
import { HelperModule } from './helper/helper.module';
import { VerificationModule } from './verification/verification.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_SRV),
    CompanyModule,
    HelperModule,
    VerificationModule,
    RoleModule,
    UserModule,
  ],
})
export class AppModule {}