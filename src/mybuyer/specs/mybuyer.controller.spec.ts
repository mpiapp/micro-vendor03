import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MybuyerController } from '../mybuyer.controller';
import { MybuyerService } from '../mybuyer.service';
import { MybuyerRepository } from '../repository/mybuyer.repository';

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

const deletedData = {
  "company_id": "1",
  "buyer_id": "1",
  "isDeleted": true,
  "deletedAt": new Date
}

const deletedDataFail = {
  "company_id": "0",
  "buyer_id": "1",
  "isDeleted": true,
  "deletedAt": new Date
}

const RepositoryMock = {
  create: (dto) => {
    if(dto.company_id !== '1') {
      throw new Error('Error');
    }

    return dto; 
  },
  findOne: jest.fn((goodData) => ({
    skip: jest.fn().mockReturnThis(),
    countDocuments:jest.fn(() => {
      if(goodData.company_id === '1') {
        return 0;
      }

      throw new Error('Error');
      
       
    }),
  })),
  findOneAndUpdate : (id, data) => {
    if(data.company_id === '1') {
      return data;
    }
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
    expect(await controller.update(goodData)).toBe(goodData);
  });

  it('should fail edit new buyer', () => {
    expect(controller.update(badData)).rejects.toThrow('Document not exists');
  });

  it('should delete a buyer', async () => {
    expect(await controller.delete(deletedData)).toStrictEqual({"message": "Success. Document has been deleted", "statusCode": 200});
  });

  it('should fail delete non exists buyer', () => {
    expect(controller.delete(deletedDataFail)).rejects.toThrow('Document not exists');
  });
});