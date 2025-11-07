import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru/translation.json';
import en from './locales/en/translation.json';
import kk from './locales/kk/translation.json';
import zh from './locales/zh/translation.json';

export const localizeOptions = {
  apiKey: 'a5e97841-0859-47cc-b2f0-c4177b9e0137',
  projectId: 'b4a08f77-e09e-45e6-a51a-e76be3898b06',
  referenceLng: 'ru',
  version: 'latest'
};

const savedLanguage = localStorage.getItem('language') || 'ru';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: { ...ru }
      },
      en: {
        translation: { ...ru, ...en }
      },
      kk: {
        translation: { ...ru, ...kk }
      },
      zh: {
        translation: { ...zh }
      }
    },
    lng: savedLanguage,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


