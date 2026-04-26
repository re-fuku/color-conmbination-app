import type { ColorStop } from "../../../../../App"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    index: number
    slideItem: (index: number) => void
}

export default function DeleteButton({colors, setColors, slideItem, index}: Props) {

    // アイテムリストを削除する
    const deleteList = (index: number) => {
        // propsを除外した配列を作成
        const newColors = colors.filter((_, i) => i !== index)
        setColors(newColors)
        slideItem(index)
    }

    return (
        <button
            className="flex items-center absolute right-0 top-[5px] w-8 h-8 rounded-full bg-delete-color"
            onClick={() => deleteList(index)}
        >
            <span className="leading-none w-full h-full rounded-full text-3xl font-bold flex justify-items-center justify-center hover:border-white hover:border-2">ー</span>
        </button>
    )
}