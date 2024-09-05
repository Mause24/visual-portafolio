import translater from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
// LANGUAGE EN
import experienceEN from "public/translations/en/experience.json"
import layoutEN from "public/translations/en/layout.json"
// LANGUAGE ES
import experienceES from "public/translations/es/experience.json"
import layoutES from "public/translations/es/layout.json"

translater
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			es: {
				layout: layoutES,
				experience: experienceES,
			},
			en: {
				layout: layoutEN,
				experience: experienceEN,
			},
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	})

export default translater
