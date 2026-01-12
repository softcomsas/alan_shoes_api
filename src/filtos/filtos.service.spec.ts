import { Test, TestingModule } from '@nestjs/testing';
import { FiltosService } from './filtos.service';

describe('FiltosService', () => {
  let service: FiltosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiltosService],
    }).compile();

    service = module.get<FiltosService>(FiltosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
