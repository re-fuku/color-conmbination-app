import SingleValue from "./ui/SingleValue"
import ColorParcent from "./ui/ColorParcent"
import AddItemButton from "./ui/AddItemButton"
import type { SidePanelProps } from "../../../App"
import type { AddProps } from "./SettingPanel"

export default function LinearBaseSetting(props: SidePanelProps & AddProps) {

    // propsの分割代入で必要なものを抽出する
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
        <div>
            <SingleValue
                label="角度"
                value={angle}
                setValue={setAngle}
                styles={commonStyles}
            />

            <ColorParcent
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                parcent={true}
            />

            <AddItemButton
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
            />
        </div>
    )
}