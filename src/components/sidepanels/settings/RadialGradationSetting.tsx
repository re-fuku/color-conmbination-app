import type { SidePanelProps } from "../../../App";
import type { AddProps } from "./SettingPanel";
import AddItemButton from "./ui/AddItemButton";
import ColorStartEnd from "./ui/ColorStartEnd";
import SingleValue from "./ui/SingleValue";


export default function RadialGradationSetting(props: SidePanelProps & AddProps) {

    // propsの分割代入で必要なものを抽出する
    const {
        xPosition,
        setXPosition,
        yPosition,
        setYPosition,
        commonStyles,
        colors,
        setColors,
        activeSlideIndex,
        slideItem,
        isOpenColorPicker,
        setIsOpenColorPicker,
    } = props

    return (
        <>

            <SingleValue
                label="X位置"
                value={xPosition}
                setValue={setXPosition}
                styles={commonStyles}
            />

            <SingleValue
                label="Y位置"
                value={yPosition}
                setValue={setYPosition}
                styles={commonStyles}
            />

            <ColorStartEnd
                colors={colors}
                setColors={setColors}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                styles={commonStyles}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
            />

            <AddItemButton
                colors={colors}
                setColors={setColors}
                styles={commonStyles}
            />
        </>
    )
}