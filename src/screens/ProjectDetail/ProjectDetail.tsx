import { Text } from "@/components"
import { useProjectDetail } from "./useProjectDetail"

export const ProjectDetail = () => {
	const { projectId } = useProjectDetail()
	return (
		<div>
			<Text>ProjectDetail {projectId}</Text>
		</div>
	)
}
