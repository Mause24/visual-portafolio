import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { HeaderLinks, HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const [t] = useTranslation("layout")

	const links = useMemo(
		() => t("header.links", { returnObjects: true }) as HeaderLinks[],
		[t("header.links")]
	)

	return {
		links,
	}
}
