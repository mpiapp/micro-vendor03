import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseRepository } from '../repository/warehouse.repository';
import { WarehouseService } from '../warehouse.service';

const RepositoryMock = {
  create: (dto) => {
    return dto;
  }
}

describe('WarehouseService', () => {
  let service: WarehouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseRepository, WarehouseService , {
        provide: getModelToken('Warehouse'),
        useValue: RepositoryMock
      }],
    }).compile();

    service = module.get<WarehouseService>(WarehouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
