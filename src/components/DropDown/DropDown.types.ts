export interface ItemsDropDown {
	label: string
	value: string | number
	onClick?: (val: string | number) => void
	childs?: ItemsDropDown[]
	isSelected?: boolean
}

export interface DropDownProps {
	items: ItemsDropDown[]
	isOpen?: boolean
	onChangeDropDown?: () => void
	children: JSX.Element
}
