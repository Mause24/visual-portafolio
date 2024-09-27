import clsx from "clsx"
import { Link } from "react-router-dom"
import { Text } from "../Text"
import { CardProps } from "./Card.types"

export const Card: React.FC<CardProps> = ({ title, src, path }) => {
	return (
		<Link to={path}>
			<div
				className={clsx(
					"bg-neutral-200",
					"dark:bg-dark-backgroundHeader-normal",
					"border-b-4",
					"border-blue-500 "
				)}
			>
				<div className="flex items-center px-2 py-1 w-[470px] gap-x-2">
					<img src={src} alt="CardImage" />
					<Text
						type="p"
						className={clsx(
							"text-light-secondary-alternate",
							"dark:text-gray-light",
							"font-sans"
						)}
					>
						{title}
					</Text>
				</div>
			</div>
		</Link>
	)
}
