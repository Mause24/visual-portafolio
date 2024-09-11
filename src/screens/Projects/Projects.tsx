import { Slider3D } from "@/components"
import { ProjectsJSON } from "@/interfaces"
import clsx from "clsx"
import { useMemo } from "react"
import { useTranslation } from "react-i18next"

export const Projects = () => {
	const [t] = useTranslation("projects")
	const projectsPreview: ProjectsJSON[] = useMemo(
		() => t("projectsPreview", { returnObjects: true }),
		[t("projectsPreview")]
	)

	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"flex",
				"flex-col",
				"justify-center",
				"items-center",
				"bg-inherit"
			)}
		>
			<Slider3D items={projectsPreview} />
		</div>
	)
}
