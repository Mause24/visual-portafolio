import { Text } from "@/components"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { ItemListProps } from "./ItemList.types"
import { useItemList } from "./useItemList"

export const ItemList = (props: ItemListProps) => {
	const { Icon, className, name, route } = useItemList(props)

	return (
		<li className={clsx("flex", "relative", "w-full")}>
			<Link
				/* onClick={toggleMenu} */
				id={String(route)}
				/* ref={el => (refs.current[index + 1] = el)} */
				to={route ?? "/"}
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
				{Icon}
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"line-clamp-1"
					)}
					size="lg"
				>
					{name}
				</Text>
			</Link>
		</li>
	)
}
