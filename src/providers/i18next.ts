import translater from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
// LANGUAGE EN
import layoutEN from "public/translations/en/layout.json"
// LANGUAGE ES
import layoutES from "public/translations/es/layout.json"

translater
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		lng: "es",
		resources: {
			es: {
				layout: layoutES,
			},
			en: {
				layout: layoutEN,
			},
		},
	})

export default translater
