import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { UserRepository } from '../repository/user.repository';
import { UserController } from '../user.controller';
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

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserRepository,
        UserService,
        {
          provide: getModelToken('User'),
          useValue: RepositoryMock,
        }],
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
