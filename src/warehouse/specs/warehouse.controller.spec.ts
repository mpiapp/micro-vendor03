import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseRepository } from '../repository/warehouse.repository';
import { WarehouseController } from '../warehouse.controller';
import { WarehouseService } from '../warehouse.service';

const goodData = {
  "vendor_id": "string",
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string"
}

const editData = {
  "_id": "string",
  "vendor_id": "string",
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string"
}

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
  findOneAndUpdate: (id, dto) => {
    
    return dto;
  },
}

describe('WarehouseController', () => {
  let controller: WarehouseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseRepository, WarehouseService , {
        provide: getModelToken('Warehouse'),
        useValue: RepositoryMock
      }],
      controllers: [WarehouseController],
    }).compile();

    controller = module.get<WarehouseController>(WarehouseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create new warehouse', async () => {
    expect(await controller.create(goodData)).toBe(goodData);
  });

  it('should edit warehouse', async () => {
    expect(await controller.update(editData)).toBe(editData);
  });
});
