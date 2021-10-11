import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VerificationRepository } from '../repository/verification.repository';
import { VerificationService } from '../verification.service';

const mockDataRequest = {
  "company_id": "615bd16f09048c7954ee3d2f",
  "documents": [],
}

const RepositoryMock = {
  findOneAndUpdate: (dto) => {
    return dto;
  },

  findById: (id) => {
    if(id) {
      return mockDataRequest;
    }
  }
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

  it('shoud add or edit verification data', async () => {
    const reqVerification = await service.requestVerification(mockDataRequest);

    expect(reqVerification._id).toBe(mockDataRequest.company_id);
  })

  it('should add verification data', async() => {
    const getVerificationData = await service.getVerificationData('615bd16f09048c7954ee3d2f');

    expect(getVerificationData.company_id).toBe('615bd16f09048c7954ee3d2f');
  })
});
