import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { HeaderLinks, HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const [t] = useTranslation("layout")

	const links: HeaderLinks[] = useMemo(
		() => t("header.links", { returnObjects: true }),
		[t("header.links")]
	)

	return {
		links,
	}
}
