export interface GroupRouteProps extends RouteProps {
	childrens?: RouteProps[]
}

export type Extensions =
	| "html"
	| "css"
	| "js"
	| "ts"
	| "jsx"
	| "tsx"
	| "txt"
	| "md"
	| "py"

export interface RouteProps {
	name: string
	route?: string
	ext?: Extensions
}

export const GENERAL_ROUTES: GroupRouteProps[] = [
	{
		name: "About",
		childrens: [
			{
				name: "index.html",
				route: "/",
				ext: "html",
			},
			{
				name: "experience.css",
				route: "/experience",
				ext: "css",
			},
			{
				name: "skils.js",
				route: "/skills",
				ext: "js",
			},
			{
				name: "Hobbies.py",
				route: "/hobbies",
				ext: "py",
			},
		],
	},
	{
		name: "Projects",
		route: "/projects",
		childrens: [
			{
				name: "project1.tsx",
				route: "/projects/1",
				ext: "tsx",
			},
			{
				name: "project2.jsx",
				route: "/projects/2",
				ext: "jsx",
			},
			{
				name: "project3.ts",
				route: "/projects/3",
				ext: "ts",
			},
		],
	},
	{
		name: "contact.txt",
		route: "/contact",
		ext: "txt",
	},
	{
		name: "support_me.md",
		route: "/support",
		ext: "md",
	},
]
