import { useCallback, useState } from "react"
import { SliderItemProps, SliderProps } from "./Slider.types"

export const useSlider = <T extends SliderItemProps>(props: SliderProps<T>) => {
	const { items, index, onChangeIndex, onPressNext, onPressPrevious } = props
	const [currentIndex, setCurrentIndex] = useState(index ?? 0)

	const handleChangeIndex = useCallback(
		(value: number) => {
			setCurrentIndex(value)
			onChangeIndex?.(value)
		},
		[onChangeIndex]
	)

	const handleMoveNext = useCallback(() => {
		if (currentIndex + 1 < items.length) {
			handleChangeIndex(currentIndex + 1)
			onPressNext?.(currentIndex + 1)
		}
	}, [currentIndex, handleChangeIndex, onPressNext])

	const handleMovePrevious = useCallback(() => {
		if (currentIndex - 1 > 0) {
			handleChangeIndex(currentIndex - 1)
			onPressPrevious?.(currentIndex - 1)
		}
	}, [currentIndex, handleChangeIndex, onPressPrevious])

	return {
		items,
		handleChangeIndex,
		handleMoveNext,
		handleMovePrevious,
		currentIndex,
	}
}
