import { Injectable } from '@nestjs/common';
import * as webPush from 'web-push';

@Injectable()
export class PushNotificationService {
  private vapidKeys = {
    publicKey: process.env.VAPID_PUBLIC_KEY || 'BHFSWx6mdVH7xt9hgSj6vs5kCdrWTlpKu4ryWVMYq-fCgHbrNdrLG8JJNDqWgmcffkZzmI8c5wgrXZv2GbPbsoQ',
    privateKey: process.env.VAPID_PRIVATE_KEY || 'TAbP_vXzasLhP72YihmZY_jFRFtZj5BQ_i1khxldeRs',
  };

  constructor() {
    if (this.vapidKeys.publicKey && this.vapidKeys.privateKey) {
      webPush.setVapidDetails(
        'mailto:york.turcaz@gmail.com',
        this.vapidKeys.publicKey,
        this.vapidKeys.privateKey,
      );
    }
  }

  async sendPushNotification(subscription: any, payload: any) {
    try {
      await webPush.sendNotification(subscription, JSON.stringify(payload));
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }
}
