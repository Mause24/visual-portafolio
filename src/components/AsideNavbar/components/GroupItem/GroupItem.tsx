import { Accordion, ItemList } from "@/components"
import clsx from "clsx"
import { GroupItemProps } from "./GroupItem.types"
import { useGroupItem } from "./useGroupItem"

export const GroupItem = (props: GroupItemProps) => {
	const { renderHeader, childrens, name, handleOpenGroupItem, isOpenGroup } =
		useGroupItem(props)

	return (
		<Accordion
			header={renderHeader}
			className={clsx("w-full", "no-scrollbar")}
			handleOpen={handleOpenGroupItem}
			isOpen={isOpenGroup}
			key={name}
			title={name}
		>
			<ul className={clsx("ml-4")}>
				{childrens?.map(item => (
					<ItemList
						className={clsx("flex", "gap-x-1")}
						key={item.route}
						{...item}
					/>
				))}
			</ul>
		</Accordion>
	)
}
