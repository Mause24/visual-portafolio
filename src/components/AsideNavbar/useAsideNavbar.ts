import { ItemsDropDown } from "@/components"
import { GroupRouteProps } from "@/Constants"
import { useThemeStore } from "@/stores"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

export const useAsideNavbar = () => {
	const [isOpenSettings, setIsOpenSettings] = useState(false)
	const [menuSideBar, setMenuSideBar] = useState(true)
	const { toggleTheme, theme } = useThemeStore()
	const [t, i18next] = useTranslation("layout")
	const routes: GroupRouteProps[] = useMemo(
		() => t("aside", { returnObjects: true }),
		[t("aside")]
	)
	const settings: ItemsDropDown[] = useMemo(
		() => t("settings", { returnObjects: true }),
		[t("settings")]
	)

	const toggleSettingsDropdown = () => {
		setIsOpenSettings(!isOpenSettings)
	}

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
		toggleSettingsDropdown,
		isOpenSettings,
		settings,
	}
}
