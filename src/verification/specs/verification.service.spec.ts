import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VerificationRepository } from '../repository/verification.repository';
import { VerificationService } from '../verification.service';

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
}

describe('VerificationService', () => {
  let service: VerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VerificationRepository,
        VerificationService, {
          provide: getModelToken('Verification'),
          useValue: RepositoryMock,
        }
      ],
    }).compile();

    service = module.get<VerificationService>(VerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
