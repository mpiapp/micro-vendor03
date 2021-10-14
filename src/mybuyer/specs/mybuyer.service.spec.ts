import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { MybuyerService } from '../mybuyer.service';
import { MybuyerRepository } from '../repository/mybuyer.repository';


const RepositoryMock = {
  create: (dto) => {
    return dto;
  }
}

describe('MybuyerService', () => {
  let service: MybuyerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MybuyerRepository, MybuyerService, {
        provide: getModelToken('Mybuyer'),
        useValue: 'RepositoryMock'
      }],
    }).compile();

    service = module.get<MybuyerService>(MybuyerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
