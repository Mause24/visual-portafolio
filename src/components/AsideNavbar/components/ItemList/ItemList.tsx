import { Text } from "@/components"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { ItemListProps } from "./ItemList.types"

export const ItemList = ({
	name,
	route,
	icon,
	className,
	leftArrow,
}: ItemListProps) => {
	return (
		<li className={clsx("flex", "relative", "w-full")}>
			<Link
				/* onClick={toggleMenu} */
				id={String(route)}
				/* ref={el => (refs.current[index + 1] = el)} */
				to={route}
				className={clsx(
					"flex",
					"w-full",
					"h-full",
					"items-center",
					className
					/* hovering === index + 1
					? "after:scale-x-100"
					: "after:scale-x-0" */
				)}
			>
				<div className={clsx("w-3", "h-3")}>{leftArrow}</div>
				{icon}
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"line-clamp-1"
					)}
					size="lg"
					type="span"
				>
					{name}
				</Text>
			</Link>
		</li>
	)
}
