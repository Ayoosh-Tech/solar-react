import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        heroTitle: "Powering Solar Access Across Nigeria",

        heroText: "Find trusted solar companies and compare services easily ",
   
        explore: "Explore Companies",
      },
    },

    ha: {
      translation: {
        heroTitle: "Samar da Hasken Rana a Fadin Najeriya",

        heroText: "Nemo amintattun kamfanonin hasken rana kuma kwatanta ayyukansu cikin sauki",

         explore: "Duba Kamfanoni",
      },
    },

  },

  


  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;