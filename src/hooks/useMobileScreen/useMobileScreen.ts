import { useEffect, useRef, useState } from "react"
import { useMobileScreenProps } from "./useMobileScreen.types"

export const useMobileScreen = ({ minSize = 768 }: useMobileScreenProps) => {
	const pageRef = useRef(window)
	const [isMobileScreen, setIsMobileScreen] = useState(false)

	useEffect(() => {
		if (pageRef.current && pageRef.current.innerWidth < minSize) {
			setIsMobileScreen(true)
		} else {
			setIsMobileScreen(false)
		}

		pageRef.current.addEventListener("resize", evt => {
			const currentScreen = evt.target as Window

			if (currentScreen && currentScreen.innerWidth < minSize) {
				setIsMobileScreen(true)
			} else {
				setIsMobileScreen(false)
			}
		})

		return () => {
			pageRef.current.removeEventListener("resize", () => {})
		}
	}, [pageRef.current.innerWidth])

	return {
		isMobileScreen,
		widthScreen: pageRef.current.innerWidth,
		heightScreen: pageRef.current.innerHeight,
	}
}
