import { Test, TestingModule } from '@nestjs/testing';
import { VillagersService } from './villagers.service';

describe('VillagersService', () => {
  let service: VillagersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VillagersService],
    }).compile();

    service = module.get<VillagersService>(VillagersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
