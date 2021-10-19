import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
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

const RepositoryMock = {
  create: (dto) => {
    return dto; 
  },
  find: () => {
    return goodData;
  },
  findOne: jest.fn((data) => ({
    skip: jest.fn().mockReturnThis(),
    countDocuments:jest.fn(() => {
      if(data.company_id === '1') {
        return 0;
      }
      else if(data.company_id === '0') {
        return 1;
      }
      
      throw new Error('Error');
    }),
  })),
  findOneAndUpdate : (id, data) => {
    if(data.company_id === '1') {
      return data;
    }

    throw new Error('Error');
  }
}

describe('MybuyerService', () => {
  let service: MybuyerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MybuyerRepository, MybuyerService, {
        provide: getModelToken('Mybuyer'),
        useValue: RepositoryMock
      }],
    }).compile();

    service = module.get<MybuyerService>(MybuyerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add buyer into mybuyer',async () => {
    expect(await service.create(goodData)).toBe(goodData);
  });

  it('should fail add buyer into mybuyer', () => {
    expect(service.create(badData)).rejects.toThrow('Duplicate entity');
  });

  it('should edit buyer in my buyer list',async () => {
    expect(await service.update(goodData)).toBe(goodData);
  });

  it('should get all buyer from my buyer list',async () => {
    expect(await service.getAll()).toBe(goodData);
  });
 
});
