import { useThemeStore } from "@/stores"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export const useAsideNavbar = () => {
	const [menuSideBar, setMenuSideBar] = useState(true)
	const { toggleTheme, theme } = useThemeStore()
	const [t, i18next] = useTranslation("layout")

	const hadleSideBar = () => {
		setMenuSideBar(state => !state)
	}

	return {
		menuSideBar,
		hadleSideBar,
		toggleTheme,
		theme,
		t,
		i18next,
	}
}
