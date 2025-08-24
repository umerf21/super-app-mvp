import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import * as RNLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import en from './locales/en.json';
import ar from './locales/ar.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: { translation: en },
  ar: { translation: ar },
};
const LANGUAGE_KEY = 'appLanguage';

export const loadLanguage = async () => {
  let lang = await AsyncStorage.getItem(LANGUAGE_KEY);

  if (!lang) {
    const best = RNLocalize.findBestLanguageTag(['en', 'ar']);
    lang = best?.languageTag || 'en';
    if (lang === 'en') {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  }

  if (lang === 'ar') {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  } else {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }

  return lang;
};


// const fallback = { languageTag: 'en', isRTL: false };
// const rnlocal = RNLocalize?.findBestLanguageTag(['en','ar']);

  console.log(i18n.language);


// I18nManager.allowRTL(true);
// if (isRTL !== I18nManager.isRTL) {
//   I18nManager.forceRTL(isRTL);
// }

export const initI18n = async () => {
  const lang = await loadLanguage();

  await i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  return i18n;
};

export default i18n;
