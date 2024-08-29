import clsx from "clsx"
import { useFooter } from "./useFooter"

export const Footer = (): JSX.Element => {
	const { currentTime } = useFooter()
	return (
		<footer
			className={clsx(
				"bg-light-primary-normal",
				"shadow",
				"px-3",
				"h-6",
				"w-full"
			)}
		>
			<div className="flex gap-2 justify-between items-center  ">
				<div className="flex gap-3 ">
					<p className="text-white text-sm">Made in</p>
					<ul className="flex text-sm gap-3 text-white">
						<li>ReactJs</li>
						<li>TypeScript</li>
						<li>Tailwind</li>
					</ul>
				</div>
				<div>
					<ul className="flex text-sm gap-3 text-white">
						<time dateTime="">{currentTime.toLocaleString()}</time>
						<li>UTF-8</li>
						<li>Port 443</li>
					</ul>
				</div>
			</div>
		</footer>
	)
}
