import { Test, TestingModule } from '@nestjs/testing';
import { RemesasController } from './remesas.controller';
import { RemesasService } from './remesas.service';

describe('RemesasController', () => {
  let controller: RemesasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemesasController],
      providers: [RemesasService],
    }).compile();

    controller = module.get<RemesasController>(RemesasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
