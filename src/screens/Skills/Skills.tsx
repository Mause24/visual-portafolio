import { Text } from "@/components"
import {
	FaBootstrap,
	FaCss3,
	FaFigma,
	FaGithub,
	FaHtml5,
	FaJira,
	FaReact,
	FaSlack,
} from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import {
	SiClickup,
	SiExpress,
	SiJavascript,
	SiPostman,
	SiTypescript,
	SiVisualstudiocode,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
export const Skills = () => {
	return (
		<div className="flex flex-col gap-y-10 px-5 py-4">
			<Text type="h1" className="font-sans dark:text-gray-500 text-black">
				Skills
			</Text>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Lenguages
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex-col gap-y-3 ">
				<div className="flex  items-center gap-6">
					<SiJavascript className="text-extensions-js" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						JavaScript
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiTypescript className="text-extensions-ts" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						TypeScript
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaHtml5 className="text-extensions-html" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						HTML
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaCss3 className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						CSS3
					</Text>
				</div>
			</div>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Frameworks
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex-col">
				<div className="flex  items-center gap-6">
					<FaReact className="text-extensions-jsx" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						ReactJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<TbBrandReactNative
						className="text-extensions-jsx"
						size={48}
					/>
					<Text type="p" className="font-sans dark:text-white">
						React Native
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<RiTailwindCssFill
						className="text-extensions-ts"
						size={48}
					/>
					<Text type="p" className="font-sans dark:text-white">
						Tailwind css
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<RiNextjsLine className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						NextJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiExpress className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						ExpressJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaBootstrap className="text-purple-800" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Boostrap
					</Text>
				</div>
			</div>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Tools
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex-col">
				<div className="flex  items-center gap-6">
					<SiVisualstudiocode
						className="text-extensions-jsx"
						size={48}
					/>
					<Text type="p" className="font-sans dark:text-white">
						Visual studio
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaSlack className="text-pink-500" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Slack
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiClickup className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Click up
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaJira className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Jira
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaFigma className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Figma
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiPostman className="text-orange-500" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Postman
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaGithub className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Git
					</Text>
				</div>
			</div>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					libraries
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex-col">
				<div className="flex  items-center gap-6">
					<SiVisualstudiocode
						className="text-extensions-jsx"
						size={48}
					/>
					<Text type="p" className="font-sans dark:text-white">
						Visual studio
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaSlack className="text-pink-500" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Slack
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiClickup className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Click up
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaJira className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Jira
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaFigma className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Figma
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiPostman className="text-orange-500" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Postman
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaGithub className="dark:text-white" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Git
					</Text>
				</div>
			</div>
		</div>
	)
}
