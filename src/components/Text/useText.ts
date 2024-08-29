import clsx from "clsx"
import {
	TextColors,
	TextProps,
	TextSizes,
	TextTypes,
	TextWeights,
} from "./Text.types"

export const useText = <T extends keyof TextTypes>(props: TextProps<T>) => {
	const {
		type,
		children,
		weight,
		props: textAttributes,
		size,
		color = "primary",
		className,
	} = props

	const defaultTextProps: Partial<TextTypes> = {
		b: { className: clsx("font-sans", "text-base") },
		h1: { className: clsx("font-sans", "text-4xl") },
		h2: { className: clsx("font-sans", "text-3xl") },
		h3: { className: clsx("font-sans", "text-3xl") },
		h4: { className: clsx("font-sans", "text-xl") },
		h5: { className: clsx("font-sans", "text-xl") },
		h6: { className: clsx("font-sans", "text-xl") },
		label: {
			className: clsx("font-sans", "text-base"),
		},
		p: { className: clsx("font-sans", "text-base") },
		span: {
			className: clsx("font-sans", "text-base"),
		},
		strong: {
			className: clsx("font-sans", "text-base"),
		},
		legend: {
			className: clsx("font-sans", "text-base"),
		},
	}

	const mergedProps = {
		...defaultTextProps[type],
		...textAttributes,
		className: clsx(
			defaultTextProps[type]?.className ?? "",
			className,
			size && TextSizes[size],
			weight && TextWeights[weight],
			color && TextColors[color]
		),
	} as any

	return {
		type,
		children,
		textAttributes,
		mergedProps,
	}
}
