import { TimelineItemProps } from "./TimelineItem.types"

export const useTimelineItem = (props: TimelineItemProps) => {
	const { description, title } = props

	return {
		description,
		title,
	}
}
