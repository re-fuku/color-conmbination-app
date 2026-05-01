import type { SidePanelProps } from "../../../App"
import type { AddProps } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import ColorStartEnd from "./ui/ColorStartEnd"
import SingleValue from "./ui/SingleValue"

export default function LinearGradiationSetting(props: SidePanelProps & AddProps) {

    const {
        angle,
        setAngle,
        commonStyles,
        colors,
        setColors,
        activeSlideIndex,
        slideItem
    } = props

    return (
        <>
            <SingleValue
                label="角度"
                value={angle}
                setValue={setAngle}
                styles={commonStyles}
            />

            <ColorStartEnd
                colors={colors}
                setColors={setColors}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                styles={commonStyles}
            />

            <AddItemButton
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
            />
        </>
    )
}