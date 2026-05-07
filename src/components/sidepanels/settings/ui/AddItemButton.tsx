import type { ColorStop } from "../../../../App"
import type { CommonStyles } from "../SettingPanel"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    styles: CommonStyles
}

export default function AddItemButton({colors, setColors}: Props) {

    const addColor = () => {
        // 既存のIDの中から最大値を探して+1する
        const maxId = colors.length > 0 
            ? Math.max(...colors.map(c => Number(c.id))) : -1

        const newId = (maxId + 1).toString()

        const newColor: ColorStop = {
            id: newId,
            color: "#ffffff",
            ratio: 10,
            start: 0,
            end: 0,
        }

        setColors([...colors, newColor])
    }


    return (
        <div className="w-full flex justify-center">
            <button 
                className="w-10 bg-transparent font-text-color flex justify-center justify-items-center"
                onClick={() => addColor()}
            >
                <img
                    src="src\assets\button\addButton.svg"
                    className="hover:scale-95"
                />
            </button>
        </div>
    )
}