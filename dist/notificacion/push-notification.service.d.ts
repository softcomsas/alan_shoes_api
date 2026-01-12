export declare class PushNotificationService {
    private vapidKeys;
    constructor();
    sendPushNotification(subscription: any, payload: any): Promise<{
        success: boolean;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
    }>;
}
