import { Test, TestingModule } from '@nestjs/testing';
import { SettingController } from '../setting.controller';

describe('SettingController', () => {
  let controller: SettingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SettingController],
    }).compile();

    controller = module.get<SettingController>(SettingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get setting', async () => {
    expect(await controller.getAll('1')).toBe('1');
  });

  it('should get setting by param', async () => {
    expect(await controller.getByParam('1', 'param')).toBe('1');
  });
});
