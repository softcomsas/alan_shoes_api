import { Test, TestingModule } from '@nestjs/testing';
import { RemesasService } from './remesas.service';

describe('RemesasService', () => {
  let service: RemesasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemesasService],
    }).compile();

    service = module.get<RemesasService>(RemesasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
