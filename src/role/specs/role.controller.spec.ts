import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RoleRepository } from '../repository/role.repository';
import { RoleController } from '../role.controller';
import { RoleService } from '../role.service';

const roleMock = {
  "code":"my-role",
  "name": "my role",
  "permission": [
    {
      "feature": "product",
      "capability": {"read":true,"write":true,"delete":true,"print":false},
    },
    {
      "feature": "pr",
      "capability": {"read":true,"write":true,"delete":true,"print":false},
    },
    {
      "feature": "order",
      "capability": {"read":true,"write":true,"delete":true,"print":false},
    },
  ]
}

const RepositoryMock = {
  create: (dto) => {
    return dto;
  },
  findByIdAndUpdate : (id, dto) => {
    if(id._id === '1') {
      return dto;
    }
    
    return 'error';
  }
}

describe('RoleController', () => {
  let controller: RoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoleRepository, RoleService, {
        provide: getModelToken('Role'),
        useValue:RepositoryMock,
      }],
      controllers: [RoleController],
    }).compile();

    controller = module.get<RoleController>(RoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should add new role', async () => {
    expect(await controller.createRole(roleMock)).toBe(roleMock);
  })

  it('should edit a role', async () => {
    expect(await controller.editRole('1', roleMock)).toBe(roleMock);
  })
});
