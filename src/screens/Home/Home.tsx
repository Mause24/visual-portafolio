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
			<div className="grid grid-cols-2 ">
				<div className="flex flex-col gap-6 col-span-1">
					<div className="flex flex-col ">
						<Text size="5xl" type="h1">
							Omar arenas
						</Text>
						<Text type="p" size="2xl" className="text-gray-500">
							Full Stack Developer
						</Text>
					</div>

					<div className="flex flex-col gap-2">
						<p className="text-xl text-gray-300">Start</p>
						<div className="flex flex-col ">
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Skills ...</Text>
								</div>
							</Link>

							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<GoFileDirectory size={20} />
									<Text> Proyects ...</Text>
								</div>
							</Link>
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<MdNumbers size={20} />
									<Text> Anime ...</Text>
								</div>
							</Link>
							<Link to={"/"}>
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text> Get in touch ...</Text>
								</div>
							</Link>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="mt-1 mb-1 text-xl text-gray-300">
							Recent
						</p>
						<Link to={"/experience"}>
							<div className="flex gap-x-3">
								<span className="text-blue-500">Blogs </span>
								<Text>E:/OmarArenas/Blogs</Text>
							</div>
						</Link>
						<Link to={"/skills"}>
							<div className="flex gap-x-3">
								<span className="text-blue-500">Gaming</span>
								<Text>E:/OmarArenas/Gaming</Text>
							</div>
						</Link>
						<Link to={"/projects"}>
							<div className="flex gap-x-3">
								<span className="text-blue-500">Anime</span>
								<Text>E:/OmarArenas/Anime</Text>
							</div>
						</Link>
						<Link to={"/hobbies"}>
							<div className="flex gap-x-3">
								<span className="text-blue-500">StartUp</span>
								<Text>E:/OmarArenas/Startup</Text>
							</div>
						</Link>
					</div>
				</div>
				<div className="flex flex-col justify-center col-span-1">
					<Text>About</Text>
					<div className="flex flex-col gap-y-5">
						<Card
							path="link"
							src="https://img.icons8.com/fluency/30/null/linkedin-circled.png"
							title="Prueba"
						/>
						<Card
							path="git"
							src="https://img.icons8.com/3d-fluency/28/null/github.png"
							title="Prueba"
						/>
						<Card
							path="x"
							src="https://img.icons8.com/color/28/null/twitter--v1.png"
							title="Prueba"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
