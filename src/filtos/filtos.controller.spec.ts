import { Test, TestingModule } from '@nestjs/testing';
import { FiltosController } from './filtos.controller';
import { FiltosService } from './filtos.service';

describe('FiltosController', () => {
  let controller: FiltosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiltosController],
      providers: [FiltosService],
    }).compile();

    controller = module.get<FiltosController>(FiltosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
