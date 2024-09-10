export interface ItemsDropDown {
	label: string
	value: string | number
	onClick?: (val: string | number) => void
	childs?: ItemsDropDown[]
}

export interface DropDownProps {
	items: ItemsDropDown[]
	isOpen?: boolean
	onChangeDropDown?: () => void
	children: JSX.Element
}
