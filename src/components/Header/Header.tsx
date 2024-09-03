import { Button, Text } from "@/components"
import clsx from "clsx"
import { RiArrowLeftSLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { HeaderProps } from "./Header.types"
import { useHeader } from "./useHeader"

export const Header = (props: HeaderProps): JSX.Element => {
	const { t } = useHeader(props)

	return (
		<header
			className={clsx(
				"w-full",
				"py-2",
				"px-3",
				"bg-gray-heavy",
				"dark:bg-dark-background-normal",
				"dark:text-white",
				"text-black",
				"flex",
				"justify-between",
				"items-center",
				"h-6",
				"z-20"
			)}
		>
			<div className="flex justify-center items-center">
				<img
					src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
					alt="visual"
					width={20}
					height={20}
				/>

				<ul className="flex gap-3 text-text-10 text-sm font-light ml-2 font-sans">
					<li>
						<Text size="sm">{t("header.links.0")}</Text>
					</li>
					<li>
						<Text size="sm">{t("header.links.1")}</Text>
					</li>
					<li>
						<Text size="sm">{t("header.links.2")}</Text>
					</li>
					<li>
						<Text size="sm">{t("header.links.3")}</Text>
					</li>
					<li>
						<Text size="sm">{t("header.links.4")}</Text>
					</li>
					<li>
						<Text size="sm">{t("header.links.5")}</Text>
					</li>
				</ul>
			</div>
			<div className="flex items-center">
				<Button variant="transparent" type="button">
					<RiArrowLeftSLine className="w-6 h-6" />
				</Button>
				<div className="flex items-center gap-2">
					<Link to={"/"}>
						<div className="rounded-full w-3 h-3 bg-red-800" />
					</Link>
					<Link to={"/"}>
						<div className="rounded-full w-3 h-3 bg-yellow-500" />
					</Link>
					<Link to={"/"}>
						<div className="rounded-full w-3 h-3 bg-green-500" />
					</Link>
				</div>
			</div>
		</header>
	)
}
