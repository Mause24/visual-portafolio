import { Text } from "@/components"
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa"
import { SiJavascript, SiTypescript } from "react-icons/si"

export const Skills = () => {
	return (
		<div className="px-5">
			<Text type="h1">Skills</Text>
			<div className="py-4">
				<Text type="span" className="font-sans dark:text-gray-500">
					Lenguages
				</Text>
			</div>
			<div className="flex gap-x-10">
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
			<div className="flex gap-x-10">
				<div className="flex  items-center gap-6">
					<FaReact className="text-extensions-jsx" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						ReactJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<SiTypescript className="text-extensions-ts" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Tailwind css
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaHtml5 className="text-extensions-html" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						NextJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaCss3 className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						ExpressJS
					</Text>
				</div>
				<div className="flex  items-center gap-6">
					<FaCss3 className="text-extensions-css" size={48} />
					<Text type="p" className="font-sans dark:text-white">
						Bosstrap
					</Text>
				</div>
			</div>
		</div>
	)
}
