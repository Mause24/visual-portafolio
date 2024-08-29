import { CardProps } from "./Card.types"

export const Card: React.FC<CardProps> = ({ title, src, path }) => {
	return (
		<a href={path}>
			<div className="bg-neutral-200 border-b-4 border-blue-500 ">
				<div className="flex items-center px-2 py-1 w-[470px] gap-x-2">
					<img src={src} /> <span className="font-sans">{title}</span>
				</div>
			</div>
		</a>
	)
}
