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

const RepositoryMock = {
  create: (dto) => {
    return dto; 
  },
  findByIdAndUpdate : (id, dto) => {
    return dto;
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

  it('should edit buyer in my buyer list',async () => {
    expect(await service.update('1', goodData)).toBe(goodData);
  });
});
