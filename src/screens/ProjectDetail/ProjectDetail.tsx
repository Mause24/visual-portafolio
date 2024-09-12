import { Text } from "@/components"
import clsx from "clsx"
import { useProjectDetail } from "./useProjectDetail"

export const ProjectDetail = () => {
	const { projectId } = useProjectDetail()
	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			<Text className={clsx("text-black", "dark:text-white")}>
				ProjectDetail {projectId}
			</Text>
		</div>
	)
}
