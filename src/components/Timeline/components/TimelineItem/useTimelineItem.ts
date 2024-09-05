import { useTranslation } from "react-i18next"
import { TimelineItemProps } from "./TimelineItem.types"

export const useTimelineItem = (props: TimelineItemProps) => {
	const { description, title, startDate, endDate } = props
	const [t, i18next] = useTranslation()

	return {
		description,
		startDate,
		endDate,
		title,
		i18next,
		t,
	}
}
