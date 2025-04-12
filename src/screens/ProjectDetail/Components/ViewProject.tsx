import { Text } from "@/components"
import clsx from "clsx"
import React from "react"
import { ViewProjectProps } from "./ViewProject.types"

export const ViewProject: React.FC<ViewProjectProps> = ({ projectData }) => {
	return (
		<div className={clsx("p-3", "w-full")}>
			<div className={clsx("w-full", "h-[50vh]", "relative", "grid")}>
				<img
					className={clsx(
						"w-full ",
						"h-[60vh]",
						"rounded-xl",
						"object-cover"
					)}
					alt="backgroundImage"
					src={projectData.backImg}
				/>
				<div
					className={clsx(
						"bg-slate-800",
						"absolute",
						"flex",
						"lg:top-[19vw]",
						"max-md: top-[70vw]",
						"place-self-center",
						"w-[80%]",
						"rounded-lg",
						"max-md:w-full"
					)}
				>
					<div
						className={clsx(
							"flex",
							"flex-col",
							"px-20",
							"py-6",
							"max-md:px-6"
						)}
					>
						<div
							className={clsx(
								"w-full",
								"flex",
								"justify-between",
								"items-center"
							)}
						>
							<img
								alt="prueba"
								src={projectData.icon}
								className={clsx("w-10", "h-10")}
							/>
							<p className={clsx("text-gray-300", "font-sans")}>
								{projectData.linkProject}
							</p>
						</div>
						<div>
							<h1>
								<Text
									type="span"
									className={clsx(
										"text-gray-300",
										"font-sans",
										"font-bold"
									)}
								>
									{projectData.title}
								</Text>
							</h1>
							<p className={clsx("text-gray-400")}>
								{projectData.description}
							</p>

							<div className={clsx("flex", "flex-col")}>
								<h3
									className={clsx(
										"text-gray-300",
										"font-semibold",
										"py-2"
									)}
								>
									{projectData.secondTitle}
								</h3>

								{projectData.listItems.map(item => (
									<ul
										className={clsx(
											"flex",
											"flex-col",
											"gap-1",
											"list-disc",
											"text-gray-400"
										)}
										key={item}
									>
										<li>{item}</li>
									</ul>
								))}
							</div>
							<div
								className={clsx(
									"flex",
									"flex-col",
									"gap-y-2",
									"mt-2"
								)}
							>
								<h3 className={clsx("text-gray-300")}>
									{projectData.titleTecnologies}:
								</h3>
								<div className="flex gap-x-2">
									{projectData.iconsTecnologies.map(item => {
										const imageName = item
											.split("/")
											.pop()
											?.split(".")[0]
										return (
											<ul key={imageName}>
												<li>
													<img
														className={clsx(
															"h-10",
															"w-10"
														)}
														src={item}
														title={imageName}
														alt={imageName}
													/>
												</li>
											</ul>
										)
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
