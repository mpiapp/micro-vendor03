import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VendorRepository } from '../repository/vendor.repository';
import { VendorService } from '../vendor.service';

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
  get: (dto) => {
    return dto;
  }
}

describe('VendorService', () => {
  let service: VendorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorRepository, VendorService, {
        provide: getModelToken('Vendor'),
        useValue: RepositoryMock
      }],
    }).compile();

    service = module.get<VendorService>(VendorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
