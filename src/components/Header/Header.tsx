import clsx from "clsx"
import { RiArrowLeftSLine } from "react-icons/ri"
import { HeaderProps } from "./Header.types"
import { useHeader } from "./useHeader"

export const Header = (props: HeaderProps): JSX.Element => {
	const {} = useHeader(props)

	return (
		<header
			className={clsx(
				"w-full",
				"py-2",
				"px-3",
				"bg-light-background-normal",
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
					<li>About</li>
					<li>Experience</li>
					<li>Skill</li>
					<li>Proyects</li>
					<li>Contact</li>
					<li>Hobbies</li>
				</ul>
			</div>
			<div className="flex items-center">
				<button type="button">
					<RiArrowLeftSLine className="w-6 h-6" />
				</button>
				<div className="flex items-center gap-2">
					<a href="">
						<div className="rounded-full w-3 h-3 bg-red-800" />
					</a>
					<a href="">
						<div className="rounded-full w-3 h-3 bg-yellow-500" />
					</a>
					<a href="">
						<div className="rounded-full w-3 h-3 bg-green-500" />
					</a>
				</div>
			</div>
		</header>
	)
}
