import { Test, TestingModule } from '@nestjs/testing';
import { NookmilesService } from './nookmiles.service';

describe('NookmilesService', () => {
  let service: NookmilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NookmilesService],
    }).compile();

    service = module.get<NookmilesService>(NookmilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
