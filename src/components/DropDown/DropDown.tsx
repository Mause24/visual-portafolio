import { useDropDown } from "@/components"
import React from "react"
import { DropDownProps } from "./DropDown.types"

export const Dropdown: React.FC<DropDownProps> = props => {
	const { isOpenDropDown, children, items, toggleDropDown, renderItems } =
		useDropDown(props)

	return (
		<div className="relative inline-block text-left">
			{children}
			{isOpenDropDown && (
				<div className="flex flex-col  absolute bottom-0 left-8 mt-2 w-56 rounded-md shadow-lg dark:bg-light-secondary-aside border-[1px] border-dark-secondary-alternate ring-black ring-opacity-5 focus:outline-none">
					{renderItems(items)}
				</div>
			)}
		</div>
	)
}
