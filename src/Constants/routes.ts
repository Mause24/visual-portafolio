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
