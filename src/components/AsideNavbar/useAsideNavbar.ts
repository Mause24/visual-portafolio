import { GroupRouteProps } from "@/Constants"
import { useThemeStore } from "@/stores"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

export const useAsideNavbar = () => {
	const [menuSideBar, setMenuSideBar] = useState(true)
	const { toggleTheme, theme } = useThemeStore()
	const [t, i18next] = useTranslation("layout")
	const routes: GroupRouteProps[] = useMemo(
		() => t("aside", { returnObjects: true }),
		[t("aside")]
	)

	const hadleSideBar = () => {
		setMenuSideBar(state => !state)
	}

	return {
		menuSideBar,
		hadleSideBar,
		toggleTheme,
		theme,
		routes,
		i18next,
	}
}
