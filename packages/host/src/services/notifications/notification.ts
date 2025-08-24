import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
  AndroidImportance,
  RepeatFrequency,
} from '@notifee/react-native';
import { Platform } from 'react-native';
import { navigation } from '../../navigation/navigation.config'; // import your root navigation
import { ROOT_PAGE_URL } from '../../navigation/navigation.types';

/**
 * Initialize notifications
 */
export async function initNotifications() {
  if (Platform.OS === 'ios') {
    await notifee.requestPermission();
  }

  // Handle notification press
  notifee.onForegroundEvent(({ type }) => {
    if (type === EventType.PRESS) {
      navigation.navigate(ROOT_PAGE_URL.Notification);
    }
  });
}

/**
 * Create default channel for Android
 */
export async function createDefaultChannel() {
  if (Platform.OS === 'android') {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
  }
}

/**
 * Schedule a repeating test notification every 1 minute
 */
export async function scheduleTestNotification() {
  const date = new Date(Date.now() + 60 * 1000); // 1 minute from now

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency: RepeatFrequency.MINUTELY,
  };

  await notifee.createTriggerNotification(
    {
      title: 'Test Notification',
      body: 'This is a scheduled test notification.',
      android: { channelId: 'default' },
      ios: { sound: 'default' },
    },
    trigger
  );
}

/**
 * Trigger a notification immediately (optional helper)
 */
export async function triggerNow() {
  await notifee.displayNotification({
    title: 'Immediate Test',
    body: 'This is an immediate notification.',
    android: { channelId: 'default' },
    ios: { sound: 'default' },
  });
}
