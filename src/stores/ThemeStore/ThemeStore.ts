import { create } from "zustand"
import { Themes, ThemeStoreProps } from "./ThemeStore.types"

export const useThemeStore = create<ThemeStoreProps>((set, get) => {
	const currentTheme = String(
		localStorage.getItem("theme") ?? "es"
	) as keyof typeof Themes

	const changeTheme = (newTheme: keyof typeof Themes) => {
		const { theme } = get()
		document.documentElement.classList.remove(theme)
		document.documentElement.classList.add(theme)
		localStorage.setItem("session", newTheme)

		set({ theme: newTheme })
	}

	return {
		theme: currentTheme,
		changeTheme,
	}
})
