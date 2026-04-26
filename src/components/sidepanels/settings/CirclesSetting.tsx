import type { CommonStyles } from "./SettingPanel"
import type { ColorStop } from "../../../App"
import ChangeSize from "./listitems/ChangeSize"

type Props = {
    wSize: number
    setWSize: (wSize: number) => void
    colors: ColorStop[]
    setColors: (colors: ColorStop[]) => void
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    commonStyles: CommonStyles
}

export default function CirclesSetting({props}: Props) {

    return (
        <div className="flex flex-col">
            <ChangeSize {...props} />
                
        </div>
    )
}