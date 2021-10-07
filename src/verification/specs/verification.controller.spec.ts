import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VerificationRepository } from '../repository/verification.repository';
import { VerificationController } from '../verification.controller';
import { VerificationService } from '../verification.service';

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
}

describe('VerificationController', () => {
  let controller: VerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VerificationRepository, 
        VerificationService, {
          provide: getModelToken('Verification'),
          useValue: RepositoryMock,
        }
       ],
      controllers: [VerificationController],
    }).compile();

    controller = module.get<VerificationController>(VerificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
