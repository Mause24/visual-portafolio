import { GENERAL_ROUTES } from "@/Constants"
import clsx from "clsx"
import { LuFiles } from "react-icons/lu"
import { SiTypescript } from "react-icons/si"
import { Button } from "../Button"
import { GroupItem, ItemList } from "./components"
import { useAsideNavbar } from "./useAsideNavbar"

export const AsideNavbar = () => {
	const { hadleSideBar, handleOpenGroupItems, menuSideBar, openIndex } =
		useAsideNavbar()

	return (
		<aside
			className={clsx(
				"flex",
				"bg-light-background-normal",
				"dark:bg-dark-background-normal"
			)}
		>
			<div className={clsx("flex", "flex-[0.12]", "justify-center")}>
				<Button
					className={clsx(
						"w-9",
						"h-9",
						"pl-2",
						"relative",
						menuSideBar &&
							clsx(
								"after:content-['']",
								"after:w-full",
								"after:h-full",
								"after:border-l-light-primary-normal",
								"after:border-l-[3px]",
								"after:absolute",
								"after:bottom-0",
								"after:left-0"
							)
					)}
					variant="transparent"
					onClick={hadleSideBar}
				>
					<LuFiles
						className={clsx(
							"w-full",
							"h-full",
							"text-light-secondary-alternate",
							"dark:text-dark-secondary-alternate"
						)}
					/>
				</Button>
			</div>
			<nav
				className={clsx(
					"flex-col",
					"flex-1",
					"z-20",
					"w-[250px]",
					menuSideBar ? "flex" : "hidden"
				)}
			>
				<ul
					className={clsx(
						"flex",
						"flex-col",
						"items-start",
						"gap-x-4",
						"transition-all",
						"duration-[200ms]"
					)}
				>
					{GENERAL_ROUTES.map((item, index) =>
						Number(item.children?.length) > 0 ? (
							<GroupItem
								key={item.route}
								handleOpen={handleOpenGroupItems(index)}
								isOpen={index === openIndex}
								{...item}
							/>
						) : (
							<ItemList
								className={clsx("flex", "gap-x-1")}
								icon={
									<SiTypescript
										className={clsx(
											"w-4",
											"h-4",
											"text-light-primary-normal",
											"dark:text-dark-primary-normal"
										)}
									/>
								}
								key={item.route}
								name={item.name}
								route={item.route}
							/>
						)
					)}
				</ul>
			</nav>
		</aside>
	)
}
