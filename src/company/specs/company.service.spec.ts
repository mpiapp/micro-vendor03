import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from '../company.service';
import { getModelToken } from '@nestjs/mongoose';
import { CompanyRepository } from '../repository/company.repository';
import { HelperService } from '../../helper/helper.service';
import { RepositoryMock } from '../mock/repository.mock';
import { companyDetail } from '../mock/data.mock';

describe('Company Service', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRepository, HelperService, CompanyService, {
        provide: getModelToken('Company'),
        useValue: RepositoryMock,
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

  it('should get all company', async () => {
    expect(await service.getAllCompany(1,2)).toMatchObject(companyDetail);
  });

  it('should get all company', async () => {
    expect(await service.getAllCompany(undefined,undefined)).toBeUndefined;
  });

  it('should get company by id', async () => { 
    expect(await service.getCompanyDetail('1')).toMatchObject(companyDetail);
  });
  
  it('should edit company by id', async () => {
    expect(await service.editCompanyDetail('1', companyDetail)).toMatchObject(companyDetail);
  });

});
