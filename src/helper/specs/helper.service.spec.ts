import { Test, TestingModule } from '@nestjs/testing';
import { CompanyService } from '../../company/company.service';
import { getModelToken } from '@nestjs/mongoose';
import { CompanyRepository } from '../../company/repository/company.repository';
import { HelperService } from '../../helper/helper.service';
import { RepositoryMock } from '../../company/mock/repository.mock';

describe('CompanyService', () => {
  let service: HelperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompanyRepository, HelperService, CompanyService, {
        provide: getModelToken('Company'),
        useValue: RepositoryMock,
      }],
    }).compile();

    service = module.get<HelperService>(HelperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create ABBR', () => {
      expect(service.createAbbr('PT.LOREMIPSUM')).toBe('LOR');
  })

  it('should generate Company Code', async () => {
    expect(await service.generateCompanyCode('PT.LOREM IPSUM')).toBe('LOR01');
  })

  it('should generate Company Code', async () => {
    expect(await service.generateCompanyCode('PT. TESTING')).toBe('TES02');
  })

});
