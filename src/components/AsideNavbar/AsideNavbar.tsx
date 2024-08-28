import { GENERAL_ROUTES } from "@/Constants"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { Text } from "../Text"

export const AsideNavbar = () => {
	return (
		<aside
			className={clsx(
				"flex-[0.4]",
				"min-w-[250px]",
				"bg-light-background-normal",
				"dark:bg-dark-background-normal"
			)}
		>
			<nav className={clsx("flex", "flex-col", "flex-1", "z-20")}>
				<ul
					className={clsx(
						"flex",
						"flex-col",
						"items-start",

						"px-2",
						"gap-x-4",
						"transition-all",
						"duration-[200ms]"
					)}
				>
					{GENERAL_ROUTES.map(item => (
						<li
							key={item.route}
							className={clsx("flex", "relative")}
						>
							<Link
								/* onClick={toggleMenu} */
								id={String(item.route)}
								/* ref={el => (refs.current[index + 1] = el)} */
								to={item.route}
								className={clsx(
									"flex",
									"w-full",
									"h-full",
									"items-center"
									/* hovering === index + 1
										? "after:scale-x-100"
										: "after:scale-x-0" */
								)}
							>
								<Text
									className={clsx(
										"text-black",
										"dark:text-white"
									)}
									size="lg"
									type="span"
								>
									{item.name}
								</Text>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	)
}
