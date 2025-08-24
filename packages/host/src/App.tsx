import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
// import { scheduleMockNotifications } from "./services/notifications/notification";
import RootStack from './navigation/RootStack';
import { initI18n } from './i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { store } from './store';
import { navigation } from './navigation/navigation.config'
import * as NotificationService from './services/notifications/notification';

function App() {
  const [ready, setReady] = useState(false);
  const [i18nInstance, setI18nInstance] = useState<any>(null);

  useEffect(() => {
    const init = async () => {
      const i18n = await initI18n();
      setI18nInstance(i18n);
      setReady(true);
    };
    init();
    // scheduleMockNotifications();
  }, []);

  useEffect(() => {
    async function notificationInit() {
      await NotificationService.createDefaultChannel();
      await NotificationService.initNotifications();
      await NotificationService.scheduleTestNotification();
    }
    notificationInit();
  }, []);

  return (
    <Provider store={store}>    
      <I18nextProvider i18n={i18nInstance}>
        <NavigationContainer ref={navigation}>
          <RootStack />
        </NavigationContainer>  
      </I18nextProvider>
    </Provider>
  );
}

export default App;
