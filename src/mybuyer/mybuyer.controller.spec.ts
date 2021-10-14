import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MybuyerController } from './mybuyer.controller';
import { MybuyerService } from './mybuyer.service';
import { MybuyerRepository } from './repository/mybuyer.repository';

const goodData = {
  "company_id": "1",
  "buyer_id": "1",
  "payment_term": "COD",
  "initial_discount": 10,
  "product_discount": [
    {"product_id":1, "discount":10},
    {"product_id":2, "discount":2}
  ]
}

const badData = {
  "company_id": "0",
  "buyer_id": "1",
  "payment_term": "COD",
  "initial_discount": 10,
  "product_discount": [
    {"product_id":1, "discount":10},
    {"product_id":2, "discount":2}
  ]
}

const RepositoryMock = {
  create: (dto) => {
    if(dto.company_id !== '1') {
      throw new Error('Error');
    }

    return dto; 
  },
  findByIdAndUpdate: (id, dto) => {
    if(id.company_id !== '1') {
      throw new Error('Error');
    }

    return dto;
  }
}

describe('MybuyerController', () => {
  let controller: MybuyerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MybuyerRepository, MybuyerService, {
        provide: getModelToken('Mybuyer'),
        useValue: RepositoryMock
      }],
      controllers: [MybuyerController],
    }).compile();

    controller = module.get<MybuyerController>(MybuyerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add new buyer into buyer list', async () => {
    expect(await controller.create(goodData)).toBe(goodData);
  });

  it('should fail when add new buyer into buyer list', () => {
    expect(controller.create(badData)).rejects.toThrow('Error');
  });

  it('should edit new buyer', async () => {
    expect(await controller.update('1',goodData)).toBe(goodData);
  });

  it('should fail edit new buyer', () => {
    expect(controller.update('0',badData)).rejects.toThrow('Error');
  });
});
