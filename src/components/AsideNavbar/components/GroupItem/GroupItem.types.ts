export interface GroupItemProps {
	handleOpen: () => void
	route: string
	name: string
	isOpen: boolean
	children?: {
		route: string
		name: string
	}[]
}
