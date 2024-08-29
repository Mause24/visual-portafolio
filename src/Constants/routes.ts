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
		name: "About",
		route: "/",
		children: [
			{
				name: "index.html",
				route: "/index",
			},
			{
				name: "experience.css",
				route: "/experience",
			},
			{
				name: "skils.js",
				route: "/skills",
			},
			{
				name: "Hobbies.py",
				route: "/hobbies",
			},
		],
	},
	{
		name: "Projects",
		route: "/projects",
		children: [
			{
				name: "project1.tsx",
				route: "/projects/1",
			},
			{
				name: "project2.html",
				route: "/projects/2",
			},
			{
				name: "project3.js",
				route: "/projects/3",
			},
		],
	},
	{
		name: "contact.txt",
		route: "/contact",
	},
	{
		name: "support_me.md",
		route: "/support",
	},
]
