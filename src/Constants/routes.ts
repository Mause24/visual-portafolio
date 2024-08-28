interface RouteProps {
	name: string
	route: string
	children?: {
		name: string
		route: string
	}[]
}

export const GENERAL_ROUTES: RouteProps[] = [
	{
		name: "Home",
		route: "/",
		children: [
			{
				name: "Home 2",
				route: "/link",
			},
			{
				name: "Home 3",
				route: "/link",
			},
		],
	},
	{
		name: "Home 2",
		route: "/link",
	},
	{
		name: "Home 3",
		route: "/link",
	},
]
