import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseRepository } from '../repository/warehouse.repository';
import { WarehouseController } from '../warehouse.controller';
import { WarehouseService } from '../warehouse.service';

const goodData = {
  "vendor_id": "1",
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string"
}

const editData = {
  "_id": "1",
  "vendor_id": "string",
  "name": "string",
  "address": "string",
  "phone": "string",
  "email": "string"
}

const deleteData = {
  "_id": "1",
  "isDeleted": true,
  "deletedAt": new Date
}

const deleteDataFail = {
  "_id": "INVALID",
  "isDeleted": true,
  "deletedAt": new Date
}

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
  findOneAndUpdate: (id, dto) => {
    if(dto._id === '1') {
      return dto;
    }
   
  },
  findOne: (id) => {
    return goodData;
  },
  find: () => {
    return goodData; 
  }
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

  it('should delete warehouse', async () => {
    expect(await controller.delete(deleteData)).toStrictEqual({"message": "Success. Document has been deleted", "statusCode": 200});
  });

  it('should fail delete warehouse', () => {
    expect( controller.delete(deleteDataFail)).rejects.toThrow('Document not exists');
  });

  it('should get warehouse', async () => {
    expect(await controller.get('1')).toBe(goodData);
  });

  it('should get warehouse by vendor', async () => {
    expect(await controller.getByVendor('1')).toBe(goodData);
  });
});
