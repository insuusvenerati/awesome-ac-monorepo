import { Test, TestingModule } from '@nestjs/testing';
import { VillagersController } from './villagers.controller';

describe('VillagersController', () => {
  let controller: VillagersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillagersController],
    }).compile();

    controller = module.get<VillagersController>(VillagersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
