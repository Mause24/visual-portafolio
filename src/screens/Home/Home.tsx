import { Card, Text } from "@/components"
import clsx from "clsx"
import { AiOutlineFileAdd } from "react-icons/ai"
import { GoFileDirectory } from "react-icons/go"
import { MdNumbers } from "react-icons/md"

export const Home = (): JSX.Element => {
	return (
		<div
			className={clsx("w-full", "h-full", "py-4", "flex", "items-center")}
		>
			<div className="grid grid-cols-2 ">
				<div className="flex flex-col gap-6 col-span-1">
					<div className="flex flex-col ">
						<h1 className="text-5xl font-sans">Omar arenas</h1>
						<p className="text-2xl font-sans text-gray-500">
							Frontend Developer
						</p>
					</div>

					<div className="flex flex-col gap-2">
						<p className="text-xl text-gray-300">Start</p>
						<div className="flex flex-col ">
							<a href="">
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text type="span"> Skills ...</Text>
								</div>
							</a>

							<a href="">
								<div className="flex items-center gap-2 text-blue-500">
									<GoFileDirectory size={20} />
									<Text type="span"> Proyects ...</Text>
								</div>
							</a>
							<a href="">
								<div className="flex items-center gap-2 text-blue-500">
									<MdNumbers size={20} />
									<Text type="span"> Anime ...</Text>
								</div>
							</a>
							<a href="">
								<div className="flex items-center gap-2 text-blue-500">
									<AiOutlineFileAdd size={20} />
									<Text type="span"> Get in touch ...</Text>
								</div>
							</a>
						</div>
					</div>
					<div className="flex flex-col">
						<p className="mt-1 mb-1 text-xl text-gray-300">
							Recent
						</p>
						<a href="/experience">
							<div className="flex gap-x-3">
								<span className="text-blue-500">Blogs </span>
								<Text type="span">E:/OmarArenas/Blogs</Text>
							</div>
						</a>
						<a href="/skills">
							<div className="flex gap-x-3">
								<span className="text-blue-500">Gaming</span>
								<Text type="span">E:/OmarArenas/Gaming</Text>
							</div>
						</a>
						<a href="projects">
							<div className="flex gap-x-3">
								<span className="text-blue-500">Anime</span>
								<Text type="span">E:/OmarArenas/Anime</Text>
							</div>
						</a>
						<a href="hobbies">
							<div className="flex gap-x-3">
								<span className="text-blue-500">StartUp</span>
								<Text type="span">E:/OmarArenas/Startup</Text>
							</div>
						</a>
					</div>
				</div>
				<div className="flex flex-col justify-center col-span-1">
					<Text type="span">About</Text>
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
