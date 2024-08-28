import { useNavigate } from "react-router-dom"

export const useMissingRoute = () => {
	const navigate = useNavigate()

	const handleGoBack = () => {
		navigate("/")
	}

	return {
		handleGoBack,
	}
}
