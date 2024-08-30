import { useState } from "react"

export const useAsideNavbar = () => {
	const [menuSideBar, setMenuSideBar] = useState(true)

	const hadleSideBar = () => {
		setMenuSideBar(state => !state)
	}

	return {
		menuSideBar,
		hadleSideBar,
	}
}
