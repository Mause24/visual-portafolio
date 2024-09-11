import clsx from "clsx"
import { FaLanguage, FaRegMoon } from "react-icons/fa"
import { IoLanguage } from "react-icons/io5"
import { LuFiles } from "react-icons/lu"
import { MdOutlineWbSunny } from "react-icons/md"
import { Button } from "../Button"
import { GroupItem, ItemList } from "./components"
import { useAsideNavbar } from "./useAsideNavbar"

export const AsideNavbar = () => {
	const { hadleSideBar, menuSideBar, toggleTheme, theme, i18next, routes } =
		useAsideNavbar()

	return (
		<aside className={clsx("flex", "relative")}>
			<div
				className={clsx(
					"flex",
					"flex-col",
					"justify-between",
					"flex-[0.12]",
					"justify-center",
					"dark:bg-light-secondary-aside",
					"bg-gray-xlight",
					"shadow"
				)}
			>
				<Button
					className={clsx(
						"w-12",
						"h-12",
						"p-2",
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
							menuSideBar
								? clsx("dark:text-gray-xlight")
								: clsx("dark:text-gray-heavy")
						)}
					/>
				</Button>
				<div className={clsx("flex", "flex-col")}>
					<Button
						className={clsx("w-12", "h-12", "p-2")}
						variant="transparent"
						onClick={() => toggleTheme("dark", "light")}
					>
						{theme === "light" ? (
							<MdOutlineWbSunny
								className={clsx(
									"w-full",
									"h-full",
									"text-light-secondary-alternate"
								)}
							/>
						) : (
							<FaRegMoon
								className={clsx(
									"w-full",
									"h-full",
									"text-gray-heavy"
								)}
							/>
						)}
					</Button>
					<Button
						className={clsx("w-12", "h-12", "p-2")}
						variant="transparent"
						onClick={() =>
							i18next.changeLanguage(
								i18next.language === "es" ? "en" : "es"
							)
						}
					>
						{i18next.language === "es" ? (
							<IoLanguage
								className={clsx(
									"w-full",
									"h-full",
									"text-light-secondary-alternate"
								)}
							/>
						) : (
							<FaLanguage
								className={clsx(
									"w-full",
									"h-full",
									"text-light-secondary-alternate"
								)}
							/>
						)}
					</Button>
				</div>
			</div>
			<nav
				className={clsx(
					"flex-col",
					"flex-1",
					"z-20",
					"pl-2",
					"w-[250px]",
					"bg-gray-light",
					"dark:bg-light-secondary-navBar",
					"max-md:absolute",
					"max-md:top-0",
					"max-md:left-full",
					"max-md:h-full",
					menuSideBar ? "flex" : "hidden"
				)}
			>
				<ul
					className={clsx(
						"flex",
						"flex-col",
						"list-none",
						"items-start",
						"gap-x-4",
						"transition-all",
						"duration-[200ms]"
					)}
				>
					{routes.map(item =>
						Number(item.childrens?.length) > 0 ? (
							<GroupItem key={item.name} {...item} />
						) : (
							<ItemList
								key={item.route}
								className={clsx("flex", "gap-x-1")}
								{...item}
							/>
						)
					)}
				</ul>
			</nav>
		</aside>
	)
}
