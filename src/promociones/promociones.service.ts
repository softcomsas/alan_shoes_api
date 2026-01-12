import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePromocioneDto } from './dto/create-promocione.dto';
import { UpdatePromocioneDto } from './dto/update-promocione.dto';
import { Promocione } from './entities/promocione.entity';

@Injectable()
export class PromocionesService {
  constructor(
    @InjectRepository(Promocione)
    private readonly promocioneRepository: Repository<Promocione>,
  ) {}

  async create(createPromocioneDto: CreatePromocioneDto): Promise<Promocione> {
    const promocion = this.promocioneRepository.create(createPromocioneDto);
    return await this.promocioneRepository.save(promocion);
  }

  async findAll(): Promise<Promocione[]> {
    return await this.promocioneRepository.find();
  }

  async findOne(id: number): Promise<Promocione> {
    const promo = await this.promocioneRepository.findOneBy({ id });
    if (!promo) throw new NotFoundException('Promoción no encontrada');
    return promo;
  }

  async update(id: number, updatePromocioneDto: UpdatePromocioneDto): Promise<Promocione> {
    const promo = await this.promocioneRepository.findOneBy({ id });
    if (!promo) throw new NotFoundException('Promoción no encontrada');
    Object.assign(promo, updatePromocioneDto);
    return await this.promocioneRepository.save(promo);
  }

  async remove(id: number) {
    const promo = await this.promocioneRepository.findOneBy({ id });
    if (!promo) throw new NotFoundException('Promoción no encontrada');
    return await this.promocioneRepository.softRemove(promo);
  }
}
