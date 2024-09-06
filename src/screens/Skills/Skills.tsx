import { Text } from "@/components"
import { IMAGES } from "@/Constants"
import {
	FaBootstrap,
	FaCss3,
	FaGithub,
	FaHtml5,
	FaJira,
	FaReact,
} from "react-icons/fa"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import {
	SiExpress,
	SiJavascript,
	SiPostman,
	SiTypescript,
	SiVisualstudiocode,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
export const Skills = () => {
	return (
		<div className="flex flex-col gap-y-5 px-5 py-4 overflow-y-auto">
			<Text type="h1" className="font-sans dark:text-gray-500 text-black">
				Skills
			</Text>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Lenguages
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex flex-col gap-y-5 ">
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
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex flex-col gap-y-5">
				<div className="flex  items-center gap-6">
					<FaReact className="text-extensions-jsx" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						ReactJS
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
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex flex-col gap-y-5">
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
					<img src={IMAGES.slack} />
					<Text type="p" className="font-sans dark:text-white">
						Slack
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<img src={IMAGES.clickUp} width={48} height={48} />
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
					<img src={IMAGES.figma} />
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
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex flex-col gap-y-5 ">
				<div className="flex  items-center gap-6">
					<img
						src={IMAGES.axios}
						width={70}
						height={70}
						className="text-extensions-jsx"
					/>
					<Text type="p" className="font-sans dark:text-white">
						Axios
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<img src={IMAGES.reactDom} width={48} height={48} />
					<Text type="p" className="font-sans dark:text-white">
						React Router Dom
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<img src={IMAGES.zustands} width={70} height={70} />
					<Text type="p" className="font-sans dark:text-white">
						Zustand
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<img src={IMAGES.Redux} width={50} height={50} />
					<Text type="p" className="font-sans dark:text-white">
						Redux
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<img src={IMAGES.mui} width={50} height={50} />
					<Text type="p" className="font-sans dark:text-white">
						Material Ui
					</Text>
				</div>
			</div>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Mobile
				</Text>
			</div>
			<div className="lg:flex lg:flex-row lg:gap-x-10 flex flex-col gap-y-5">
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
					<img src={IMAGES.flutter} width={50} height={50} />
					<Text type="p" className="font-sans dark:text-white">
						Flutter
					</Text>
				</div>
			</div>
		</div>
	)
}
