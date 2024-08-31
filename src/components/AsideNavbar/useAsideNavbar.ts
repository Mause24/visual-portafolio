import { useThemeStore } from "@/stores"
import { useState } from "react"

export const useAsideNavbar = () => {
	const [menuSideBar, setMenuSideBar] = useState(true)
	const { toggleTheme, theme } = useThemeStore()
	const [openIndex, setOpenIndex] = useState<number>(-1)

	const handleOpenGroupItems = (index: number) => () => {
		if (openIndex === index) {
			setOpenIndex(-1)
		} else {
			setOpenIndex(index)
		}
	}

	const hadleSideBar = () => {
		setMenuSideBar(state => !state)
	}

	return {
		menuSideBar,
		openIndex,
		hadleSideBar,
		toggleTheme,
		theme,
		handleOpenGroupItems,
	}
}
