import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProjectsDetailParams } from "./ProjectDetail.types"

export const useProjectDetail = () => {
	const params = useParams<ProjectsDetailParams>()
	const [projectId, setProjectId] = useState(params.id)

	useEffect(() => {
		if (params.id) {
			setProjectId(params.id)
		}
	}, [params])

	return {
		projectId,
	}
}
