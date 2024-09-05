import { Text } from "@/components"
import clsx from "clsx"
import { TimelineItemProps } from "./TimelineItem.types"
import { useTimelineItem } from "./useTimelineItem"

export const TimelineItem = (props: TimelineItemProps) => {
	const { description, title } = useTimelineItem(props)

	return (
		<div
			className={clsx(
				"w-full",
				"h-[60%]",
				"flex",
				"flex-col",
				"relative",
				"justify-start",
				"p-2",
				"items-center",
				"bg-gray-light",
				"dark:bg-dark-secondary-alternate",
				"rounded-xl",
				"shadow-lg"
			)}
		>
			<Text
				className={clsx("text-black", "dark:text-white", "font-bold")}
				type="h3"
				size="xl"
			>
				{title}
			</Text>
			<Text className={clsx("text-black", "dark:text-white")} type="p">
				{description}
			</Text>
		</div>
	)
}
