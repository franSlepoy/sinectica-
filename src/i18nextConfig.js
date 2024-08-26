// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)

  .use(initReactI18next)
  .init({
    fallbackLng: 'es', // Idioma predeterminado en caso de que no se pueda detectar el idioma
    debug: true, // Habilitar el modo de depuración en desarrollo
    interpolation: {
      escapeValue: false, // React manejará la interpolación
    },
  });

export default i18n;