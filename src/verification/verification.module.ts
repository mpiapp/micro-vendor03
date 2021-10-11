import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VerificationRepository } from './repository/verification.repository';
import { Verification, VerificationSchema } from './schema/verification.schema';
import { VerificationService } from './verification.service';
import { VerificationController } from './verification.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Verification.name, schema: VerificationSchema } ]),
  ],
  providers: [
    VerificationService,
    VerificationRepository
  ],
  controllers: [VerificationController]
})
export class VerificationModule {}
