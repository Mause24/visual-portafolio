import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./Layout.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLayout = (props: LayoutProps) => {
	const { children } = props
	const navigate = useNavigate()

	useEffect(() => {
		navigate("/")
	}, [])

	return { children }
}
