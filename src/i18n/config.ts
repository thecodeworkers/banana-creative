import i18next from 'i18next';

i18next.init({
    fallbackLng: 'es',
    lng: 'en',
    resources: {
			es: {
				translations: require('../../assets/lang/es.json')
			},
			en: {
				translations: require('../../assets/lang/en.json')
			}
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      wait: true,
    },
});

i18next.languages = ['es', 'en'];

export default i18next;
