import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from '../company.controller';
import { CompanyService } from '../company.service';
import { getModelToken } from '@nestjs/mongoose';
import { CompanyRepository } from '../repository/company.repository';
import { HelperService } from '../../helper/helper.service';
import { RepositoryMock } from '../mock/repository.mock';
import { companyDetail, companyDetailErr } from '../mock/data.mock';

describe('Company Controller', () => {
  let controller: CompanyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRepository, HelperService, CompanyService, {
        provide: getModelToken('Company'),
        useValue: RepositoryMock,
      }],
      controllers: [CompanyController],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add company detail', async () => {
    expect(await controller.addCompanyDetail(companyDetail)).toMatchObject(companyDetail);
  });

  it('should edit company detail', async () => {
    expect(await controller.editCompanyDetail('1',companyDetail)).toMatchObject(companyDetail);
  });
  
  it('should get company detail', async () => {
    expect(await controller.getCompanyDetail('1')).toMatchObject(companyDetail);
  });

  it('should get all company', async () => {
    expect(await controller.getAllCompany(1,2)).toMatchObject(companyDetail);
  });

  it('should throw an error when get not exists company', () => {
    expect(controller.getCompanyDetail('NON-EXISTING-ID')).rejects.toThrow('Bad Request Exception');
  });

  it('should throw an error when add company detail', () => {
    expect(controller.addCompanyDetail(companyDetailErr)).rejects.toThrow('Bad Request Exception');
  });

  it('should throw an error when edit company detail', () => {
    expect(controller.editCompanyDetail('NON-EXISTING-ID',companyDetail)).rejects.toThrow('Bad Request Exception');
  });
});
