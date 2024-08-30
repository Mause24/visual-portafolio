import clsx from "clsx"
import { AsideNavbar } from "../AsideNavbar"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutProps } from "./Layout.types"
import { useLayout } from "./useLayout"

export const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = useLayout(props)

	return (
		<>
			<Header />
			<div
				className={clsx(
					"flex",
					"min-h-[calc(100dvh-63px)]",
					"h-full",
					"bg-light-background-normal",
					"dark:bg-dark-background-normal"
				)}
			>
				<AsideNavbar />
				<main className={clsx("flex-1")}>{children}</main>
			</div>
			<Footer />
		</>
	)
}
