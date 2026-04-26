import InputAngle from "./listitems/InputAngle"
import ColorPersent from "./listitems/ColorPersent"
import AddItemButton from "./listitems/buttons/AddItemButton"
import type { CommonStyles } from "./SettingPanel"
import type { ColorStop } from "../../../App"

type Props = {
    angle: number
    setAngle: (angle: number) => void
    colors: ColorStop[]
    setColors: (colors: ColorStop[]) => void
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    commonStyles: CommonStyles
}

export default function LinearBaseSetting({angle, setAngle, commonStyles, colors, setColors, activeSlideIndex, slideItem}: Props) {
    return (
        <div>
            <InputAngle
                angle={angle}
                setAngle={setAngle}
                styles={commonStyles}
            />

            <ColorPersent
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
            />

            <AddItemButton
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
            />
        </div>
    )
}