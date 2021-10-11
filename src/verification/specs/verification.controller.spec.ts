import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { VerificationRepository } from '../repository/verification.repository';
import { VerificationController } from '../verification.controller';
import { VerificationService } from '../verification.service';

const mockDataRequest = {
  "company_id": "615bd16f09048c7954ee3d2f",
  "documents": [],
}

const mockDataRequestError = {
  "company_id": "1234567",
  "documents": [],
}

const RepositoryMock = {
  findOneAndUpdate: (dto) => {
    if(dto._id === '615bd16f09048c7954ee3d2f') {
      return dto;
    }
    else {
      throw new Error("Bad Request Exception");
    }
    
  },

  findById: (id) => {
    if(id === '615bd16f09048c7954ee3d2f') {
      return mockDataRequest;
    }
    else {
      throw new Error("Bad Request Exception");
    }

  }
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

  it('shoud add or edit verification data', async () => {
    expect(await controller.requestVerification(mockDataRequest)).toStrictEqual({"_id": "615bd16f09048c7954ee3d2f"});
  })

  it('should throw an error when add verification data', () => {
    expect(controller.requestVerification(mockDataRequestError)).rejects.toThrow('Bad Request Exception');
  });


  it('should throw an error when get verification data', () => {
    expect(controller.getVerificationData('1')).rejects.toThrow('Bad Request Exception');
  });
});
