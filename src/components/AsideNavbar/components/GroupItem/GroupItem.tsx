import { Accordion, ItemList } from "@/components"
import clsx from "clsx"
import { GroupItemProps } from "./GroupItem.types"
import { useGroupItem } from "./useGroupItem"

export const GroupItem = (props: GroupItemProps) => {
	const { handleOpen, renderHeader, children, isOpen, name, route } =
		useGroupItem(props)

	return (
		<Accordion
			header={renderHeader}
			className={clsx("w-full")}
			handleOpen={handleOpen}
			isOpen={isOpen}
			key={route}
			title={name}
		>
			<ul className={clsx("ml-4")}>
				{children?.map(item => (
					<ItemList
						key={item.route}
						name={item.name}
						route={item.route}
					/>
				))}
			</ul>
		</Accordion>
	)
}
