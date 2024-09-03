import { Timeline, TimelineItem } from "@/components"
import clsx from "clsx"
import { useState } from "react"
import { GoGoal } from "react-icons/go"
export const Experience = () => {
	const [data] = useState([
		{
			id: 1,
			title: "Full Stack Developer",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero dolorum ratione vel iusto quam possimus nisi ea unde corrupti?",
			icon: (
				<GoGoal
					className={clsx(
						"w-full",
						"h-full",
						"text-white",
						"dark:text-white"
					)}
				/>
			),
		},
		{
			id: 2,
			title: "Titulo super genial 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero dolorum ratione vel iusto quam possimus nisi ea unde corrupti?",
			icon: (
				<GoGoal
					className={clsx(
						"w-full",
						"h-full",
						"text-white",
						"dark:text-white"
					)}
				/>
			),
		},
		{
			id: 3,
			title: "Titulo super genial 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero dolorum ratione vel iusto quam possimus nisi ea unde corrupti?",
			icon: (
				<GoGoal
					className={clsx(
						"w-full",
						"h-full",
						"text-white",
						"dark:text-white"
					)}
				/>
			),
		},
		{
			id: 4,
			title: "Titulo super genial 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae libero dolorum ratione vel iusto quam possimus nisi ea unde corrupti?",
			icon: (
				<GoGoal
					className={clsx(
						"w-full",
						"h-full",
						"text-white",
						"dark:text-white"
					)}
				/>
			),
		},
	])

	return (
		<div
			className={clsx(
				"w-full",
				"h-[calc(100dvh-48px)]",
				"flex",
				"items-center",
				"justify-center",
				"px-2"
			)}
		>
			<Timeline
				keyExtractor={item => String(item.id)}
				renderComponent={item => <TimelineItem {...item} />}
				data={data}
			/>
		</div>
	)
}
