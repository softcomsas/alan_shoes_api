import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSubscription } from './entities/userSubscripcion.entity';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(UserSubscription)
    private readonly subscriptionRepo: Repository<UserSubscription>,
  ) {}

  async save(userId: number, subscription: any) {
    const sub = this.subscriptionRepo.create({
      usuario: { id: userId } as any,
      endpoint: subscription.endpoint,
      p256dh: subscription.keys.p256dh,
      auth: subscription.keys.auth,
    });
    return this.subscriptionRepo.save(sub);
  }

  async findByUserId(userId: number) {
    return this.subscriptionRepo.find({
      where: { usuario: { id: userId } },
    });
  }
}
