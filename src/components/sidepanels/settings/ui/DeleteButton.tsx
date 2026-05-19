import type { ColorConfig } from "../../../../App"
import DeleteIcon from '@/assets/button/deleteButton.svg'

type Props = {
    colors: ColorConfig[]
    setColors: (c:ColorConfig[]) => void
    index: number
    slideItem: (index: number) => void
    activeSlideIndex: number | null
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
                src={DeleteIcon}
                className="origin-center duration-300"
                style={{height: buttonSize, width: buttonSize}}
            />
        </button>
    )
}