import { IMAGES } from "@/Constants"
import clsx from "clsx"

export const ViewProject = () => {
	return (
		<div className={clsx("p-3")}>
			<div className={clsx("w-full", "h-[50vh]", "relative")}>
				<img
					className={clsx("w-[1024px] ", "h-[50vh]")}
					alt="prueba"
					src={IMAGES.prueba}
				/>
				<div
					className={clsx(
						"bg-slate-800",
						"absolute",
						"flex",
						"w-[80%]",
						"m-auto",
						"top-[19vw]"
					)}
				>
					<div className={clsx("flex", "flex-col")}>
						<div
							className={clsx(
								"w-full",
								"flex",
								"justify-between"
							)}
						>
							<span>icono</span>
							<p>prueba.com</p>
						</div>
						<div>
							<h1>prueba de titulo de proyecto</h1>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Unde, qui porro sequi maiores
								labore iure fugiat tempore at enim
								exercitationem possimus perferendis placeat
								vero, debitis quo voluptas. Minima, architecto
								ut!
							</p>

							<h3>segundo titulo</h3>
							<ul>
								<li>holi</li>
								<li>ola</li>
								<li>ji</li>
								<li>jihwd</li>
							</ul>
							<h3>tercer subtitulo</h3>
							<div>iconos de tecnologias</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
