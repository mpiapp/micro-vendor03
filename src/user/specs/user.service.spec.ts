import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../user.service';

const goodData = {
  "company_id": "string",
  "email": "string",
  "role_id": "string",
  "username": "string",
  "fullname": "string",
  "password": "string"
}

const RepositoryMock = {
  create: (dto) => {
    return dto;
  }
}

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepository, UserService, {
        provide: getModelToken('User'),
        useValue: RepositoryMock
      }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add user', async () => {
    expect(await service.createUser(goodData)).toMatchObject(goodData);
  });
});
