import { Module } from '@nestjs/common';
import { MybuyerService } from './mybuyer.service';
import { MybuyerRepository } from './repository/mybuyer.repository';

@Module({
  providers: [MybuyerRepository, MybuyerService]
})
export class MybuyerModule {}
