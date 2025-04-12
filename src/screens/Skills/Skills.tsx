import { Text } from "@/components"
import clsx from "clsx"
import { Category } from "./Skills.types"
import { useSkills } from "./useSkills"
export const Skills = (): JSX.Element => {
	const { skillsCategories, skillsTitle } = useSkills()

	return (
		<div
			className={clsx("px-5", "py-4", "max-h-screen", "overflow-y-auto")}
		>
			<Text
				type="h2"
				className={clsx("font-sans", "dark:text-white", "text-black")}
			>
				{skillsTitle}
			</Text>

			{skillsCategories.map((category: Category) => (
				<div key={category.id}>
					<Text
						type="h4"
						className={clsx(
							"py-4",
							"dark:text-white",
							"text-black"
						)}
					>
						{category.label}
					</Text>
					<ul>
						<div
							className={clsx(
								"grid",
								"w-full",
								"h-full",
								"grid-cols-2",
								"md:grid-cols-3",
								"lg:grid-cols-4",
								"gap-y-4"
							)}
						>
							{category.items.map(item => (
								<li
									className={clsx(
										"flex",
										"items-center",
										"gap-x-4"
									)}
									key={item.label}
								>
									<img
										className={clsx("w-12")}
										src={item.image}
										alt={item.label}
									/>
									<Text
										type="span"
										className={clsx(
											"dark:text-white",
											"text-black"
										)}
									>
										{item.label}
									</Text>
								</li>
							))}
						</div>
					</ul>
				</div>
			))}
		</div>
	)
}
