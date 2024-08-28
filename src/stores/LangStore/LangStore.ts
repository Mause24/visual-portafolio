import { create } from "zustand"
import { LangStoreProps, Languages } from "./LangStore.types"

export const useLangStore = create<LangStoreProps>(set => {
	const currentLang = String(
		localStorage.getItem("lang") ?? "es"
	) as keyof typeof Languages

	const changeLang = (newLang: keyof typeof Languages) => {
		localStorage.setItem("session", newLang)

		set({ lang: newLang })
	}

	return {
		lang: currentLang,
		changeLang,
	}
})
