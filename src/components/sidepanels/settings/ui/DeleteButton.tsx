import type { ColorStop } from "../../../../App"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    index: number
    slideItem: (index: number) => void
    activeSlideIndex: number
}

export default function DeleteButton({colors, setColors, slideItem, activeSlideIndex, index}: Props) {

    const buttonSize = activeSlideIndex === index? 24 : 8

    // アイテムリストを削除する
    const deleteList = (index: number) => {
        // propsを除外した配列を作成
        const newColors = colors.filter((_, i) => i !== index)
        setColors(newColors)
        slideItem(index)
    }

    return (
        <button
            className="flex items-center justify-center absolute right-[5px] top-[5px] h-7 w-7 rounded-full"
            onClick={() => deleteList(index)}    
        >
            <img
                src="src/assets/button/deleteButton.svg"
                className="origin-center duration-600"
                style={{height: buttonSize, width: buttonSize}}
            />
        </button>
    )
}