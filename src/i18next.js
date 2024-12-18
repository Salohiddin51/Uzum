import i18 from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
i18
	.use(HttpApi)
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['ru', 'uz'],
		fallbackLng: 'ru',
		backend: {
			loadPath: '/locales/{{lng}}/translations.json',
		},
		react: {
			useSuspense: true,
		},
	});

export default i18;
