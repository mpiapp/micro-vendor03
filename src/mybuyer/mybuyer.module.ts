import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MybuyerService } from './mybuyer.service';
import { MybuyerRepository } from './repository/mybuyer.repository';
import { Mybuyer, MybuyerSchema } from './schema/mybuyer.schema';
import { MybuyerController } from './mybuyer.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Mybuyer.name, schema: MybuyerSchema } ]),
  ],
  providers: [MybuyerRepository, MybuyerService],
  controllers: [MybuyerController]
})
export class MybuyerModule {}
