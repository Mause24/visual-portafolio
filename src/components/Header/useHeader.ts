import { useTranslation } from "react-i18next"
import { HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const [t] = useTranslation("layout")

	return {
		t,
	}
}
