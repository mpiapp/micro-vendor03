import { Test, TestingModule } from '@nestjs/testing';
import { VendorService } from '../vendor.service';
import { getModelToken } from '@nestjs/mongoose';
import { VendorRepository } from '../repository/vendor.repository';
import { VendorHelper } from '../helper/vendor.helper';

const RepositoryMock = {
};

describe('Company Service', () => {
  let service: VendorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorRepository, VendorHelper, VendorService, {
        provide: getModelToken('Vendor'),
        useValue: RepositoryMock,
      }],
    }).compile();

    service = module.get<VendorService>(VendorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
