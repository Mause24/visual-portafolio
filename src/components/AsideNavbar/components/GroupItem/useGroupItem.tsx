import { HeaderOptions, ItemList } from "@/components"
import clsx from "clsx"
import { FaChevronDown, FaFolder, FaFolderOpen } from "react-icons/fa"
import { GroupItemProps } from "./GroupItem.types"

export const useGroupItem = (props: GroupItemProps) => {
	const { children, isOpen, name, route, handleOpen } = props

	const renderHeader = ({ isOpen, title }: HeaderOptions) => (
		<div
			className={clsx("flex", "justify-start", "items-center", "gap-x-1")}
		>
			<ItemList
				leftArrow={
					<FaChevronDown
						className={clsx(
							"w-3",
							"h-3",
							"transition-all",
							"text-light-secondary-alternate",
							"dark:text-dark-secondary-alternate",
							"ease-linear",
							"duration-200",
							isOpen ? "rotate-0" : "-rotate-90"
						)}
					/>
				}
				name={title ?? ""}
				route={title ?? ""}
				className={clsx("flex", "gap-x-1")}
				icon={
					isOpen ? (
						<FaFolderOpen
							className={clsx(
								"w-4",
								"h-4",
								"text-light-yellow-normal",
								"dark:text-dark-secondary-alternate"
							)}
						/>
					) : (
						<FaFolder
							className={clsx(
								"w-4",
								"h-4",
								"text-light-yellow-normal",
								"dark:text-dark-secondary-alternate"
							)}
						/>
					)
				}
			/>
		</div>
	)

	return {
		renderHeader,
		handleOpen,
		children,
		isOpen,
		name,
		route,
	}
}
