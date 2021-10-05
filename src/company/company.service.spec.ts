import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from './company.service';
import { getModelToken } from '@nestjs/mongoose';
import { MockCompanyModel } from './mock/mock.company.model';
import { companyDetail, companyDetailErr } from './mock/mock.data';


describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyService, {
        provide: getModelToken('Company'),
        useValue: MockCompanyModel,
      }],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add company detail', async () => {
    expect(await service.addCompanyDetail(companyDetail)).toMatchObject(companyDetail);
  });

  it('should throw an error while add non existing field', async () => {
    let req = service.addCompanyDetail(companyDetailErr)
    expect(req).resolves.toThrowError('Test Error');
  });
});
