import { Repository } from 'typeorm';
import { UserSubscription } from './entities/userSubscripcion.entity';
export declare class SubscriptionService {
    private readonly subscriptionRepo;
    constructor(subscriptionRepo: Repository<UserSubscription>);
    save(userId: number, subscription: any): Promise<UserSubscription>;
    findByUserId(userId: number): Promise<UserSubscription[]>;
}
