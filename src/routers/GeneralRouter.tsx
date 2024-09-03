import { Home, Skills } from "@/screens"
import { Route, Routes } from "react-router-dom"

export const GeneralRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/skills" element={<Skills />} />
		</Routes>
	)
}
