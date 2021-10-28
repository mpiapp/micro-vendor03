import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VendorRepository } from '../repository/vendor.repository';
import { VendorController } from '../vendor.controller';
import { VendorService } from '../vendor.service';

const vendor = {
    name: 'Owner',
    company_name: 'MPINDO',
    email: 'owner@mpindo.com',
    password: '12345'
}

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
  findById : (dto) => {
    return dto;
  }
}

describe('VendorController', () => {
  let controller: VendorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorRepository, VendorService, {
        provide: getModelToken('Vendor'),
        useValue: RepositoryMock
      }],
      controllers: [VendorController],
    }).compile();

    controller = module.get<VendorController>(VendorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get vendor detail', async () => {
    expect(await controller.get('1')).toBe('1');
  });

  it('should create vendor', async () => {
    expect(await controller.create(vendor)).toStrictEqual({"name": "MPINDO"});
  });
});
