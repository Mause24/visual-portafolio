import { Experience } from "@/interfaces"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const useExperience = () => {
	const [t] = useTranslation("experience")
	const experience = useMemo(
		() => t("experience", { returnObjects: true }) as Experience[],
		[t("experience")]
	)

	return {
		experience,
	}
}
