import { Card, Text } from "@/components"
import clsx from "clsx"
import { AiOutlineFileAdd } from "react-icons/ai"
import { GoFileDirectory } from "react-icons/go"
import { MdNumbers } from "react-icons/md"
import { Link } from "react-router-dom"

export const Home = (): JSX.Element => {
	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"py-4",
				"flex",
				"items-center",
				"justify-center"
			)}
		>
			<div className="lg:grid grid-cols-2  ">
				<div className="flex flex-col gap-6 col-span-1">
					<div className="flex flex-col ">
						<Text
							className={clsx(
								"text-light-secondary-alternate",
								"dark:text-gray-light"
							)}
							size="5xl"
							type="h1"
						>
							Omar Arenas
						</Text>
						<Text type="p" size="2xl" className="text-gray-500">
							Senior Full Stack Developer
						</Text>
					</div>

					<div className="flex flex-col gap-2">
						<Text
							className={clsx(
								"mt-1 mb-1 text-xl text-gray-300",
								"text-gray-500",
								"dark:text-gray-light"
							)}
						>
							Start
						</Text>
						<div className="flex flex-col ">
							<Link to={"/skills"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Skills ...</Text>
								</div>
							</Link>

							<Link to={"/projects"}>
								<div className="flex items-center gap-2 text-blue-500">
									<GoFileDirectory size={20} />
									<Text> Projects ...</Text>
								</div>
							</Link>
							<Link to={"/hobbies"}>
								<div className="flex items-center gap-2 text-blue-500">
									<MdNumbers size={20} />
									<Text> Hobbies ...</Text>
								</div>
							</Link>
							<Link to={"/contact"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Get in touch ...</Text>
								</div>
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<Text
							className={clsx(
								"mt-1 mb-1 text-xl text-gray-300",
								"text-gray-500",
								"dark:text-gray-light"
							)}
						>
							Recent
						</Text>
						<Link to={"/skills"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Skills{" "}
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/OmarArenas/Skills
								</Text>
							</div>
						</Link>
						<Link to={"/projects"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Projects
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
									type="span"
								>
									E:/OmarArenas/Projects
								</Text>
							</div>
						</Link>
						<Link to={"/hobbies"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Hobbies
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/OmarArenas/Hobbies
								</Text>
							</div>
						</Link>
						<Link to={"/experience"}>
							<div className="flex gap-x-3">
								<Text type="span" className="text-blue-500">
									Experience
								</Text>
								<Text
									className={clsx(
										"text-gray-500",
										"dark:text-gray-light"
									)}
								>
									E:/OmarArenas/Experience
								</Text>
							</div>
						</Link>
					</div>
				</div>
				<div
					className={clsx(
						"flex",
						"flex-col",
						"justify-center",
						"col-span-1",
						"lg:mt-0",
						"mt-3"
					)}
				>
					<Text
						className={clsx(
							"text-gray-500",
							"dark:text-gray-light"
						)}
					>
						About
					</Text>
					<div className="flex flex-col gap-y-5">
						<Card
							path="https://www.linkedin.com/in/omar-arenas-fullstack-developer/"
							src="https://img.icons8.com/fluency/30/null/linkedin-circled.png"
							title="LinkedIn"
						/>
						<Card
							path="https://github.com/Mause24"
							src="https://img.icons8.com/3d-fluency/28/null/github.png"
							title="GitHub"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
