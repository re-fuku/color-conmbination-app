import type { SidePanelProps } from "../../../App"
import type { AddProps } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import ColorParcent from "./ui/ColorParcent"
import SingleValue from "./ui/SingleValue"

export default function CirclesSetting(props: SidePanelProps & AddProps) {

    // propsの分割代入で必要なものを抽出する
    const {
        wSize,
        setWSize,
        colors,
        setColors,
        activeSlideIndex,
        slideItem,
        commonStyles,
    } = props

    return (
        <div>
            <SingleValue 
                label="サイズ"
                value={wSize}
                setValue={setWSize}
                styles={commonStyles}
            />

            <ColorParcent
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                parcent={false}
            />

            <AddItemButton
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
            />
        </div>
    )
}