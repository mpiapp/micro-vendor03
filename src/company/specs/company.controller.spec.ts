import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from '../company.controller';
import { CompanyService } from '../company.service';
import { getModelToken } from '@nestjs/mongoose';
import { MockCompanyModel } from '../mock/mock.company.model';
import { companyDetail } from '../mock/mock.data';

describe('CompanyController', () => {
  let controller: CompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ 
        CompanyService, 
        {
          provide: getModelToken('Company'),
          useValue: MockCompanyModel,
        },
      ],
      controllers: [CompanyController],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add company detail', async () => {
    expect(await controller.addProduct(companyDetail)).toMatchObject(companyDetail);
  });
  
  
});
