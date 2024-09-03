import { Experience, Home } from "@/screens"
import { Route, Routes } from "react-router-dom"

export const GeneralRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/experience" element={<Experience />} />
		</Routes>
	)
}
