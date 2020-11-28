import { Test, TestingModule } from '@nestjs/testing';
import { NookmilesController } from './nookmiles.controller';
import { NookmilesService } from './nookmiles.service';

describe('NookmilesController', () => {
  let controller: NookmilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NookmilesController],
      providers: [NookmilesService],
    }).compile();

    controller = module.get<NookmilesController>(NookmilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
