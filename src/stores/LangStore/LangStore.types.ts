export enum Languages {
	"es" = "es",
	"en" = "en",
}

export interface LangStoreProps {
	lang: keyof typeof Languages
	changeLang: (newLang: keyof typeof Languages) => void
}
