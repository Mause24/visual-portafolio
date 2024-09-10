import { useHover } from "@/hooks"
import { useState } from "react"
import { Button } from "../Button"
import { Dropdown } from "./DropDown"
import { DropDownProps, ItemsDropDown } from "./DropDown.types"

export const useDropDown = (props: DropDownProps) => {
	const { isOpen = false, children, items, onChangeDropDown } = props

	const [isOpenDropDown, setIsOpenDropDown] = useState(isOpen)

	const toggleDropDown = () => {
		setIsOpenDropDown(!isOpenDropDown)
		onChangeDropDown?.()
	}
	const [ref, isHover] = useHover<HTMLButtonElement>()

	const renderItems = (items: ItemsDropDown[]) => {
		return items.map(item =>
			item.childs && item.childs?.length > 0 ? (
				<Dropdown items={item.childs} isOpen={isHover}>
					<Button
						ref={ref}
						key={item.value}
						variant="transparent"
						type="button"
						className="flex w-full !justify-start px-4 py-2 text-sm dark:text-white hover:bg-light-primary-normal hover:text-white rounded-none"
						role="menuitem"
						onClick={() => item.onClick?.(item.value)}
					>
						{item.label}
					</Button>
				</Dropdown>
			) : (
				<Button
					key={item.value}
					variant="transparent"
					type="button"
					className="flex w-full !justify-start px-4 py-2 text-sm dark:text-white hover:bg-light-primary-normal hover:text-white rounded-none "
					role="menuitem"
					onClick={() => item.onClick?.(item.value)}
				>
					{item.label}
				</Button>
			)
		)
	}

	return {
		isOpenDropDown,
		children,
		items,
		toggleDropDown,
		renderItems,
	}
}
