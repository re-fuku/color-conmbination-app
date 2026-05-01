import type { SidePanelProps } from "../../../App"
import type { AddProps } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import SingleValue from "./ui/SingleValue"
import ColorParcent from "./ui/ColorParcent"
import DoubleValue from "./ui/DoubleValue"

export default function RoundedRectSetting(props : SidePanelProps & AddProps) {

    // propsの分割代入で必要なものを抽出する
    const {
        wSize,
        setWSize,
        borderSize,
        setBorderSize,
        xAspect,
        setXAspect,
        yAspect,
        setYAspect,
        colors,
        setColors,
        activeSlideIndex,
        slideItem,
        commonStyles,
    } = props

    return (
        <>
            <SingleValue
                label="角丸サイズ"
                value={borderSize}
                setValue={setBorderSize}
                styles={commonStyles}
            />

            <SingleValue
                label="サイズ"
                value={wSize}
                setValue={setWSize}
                styles={commonStyles}
            />

            <DoubleValue
                xValue={xAspect}
                setXValue={setXAspect}
                yValue={yAspect}
                setYValue={setYAspect}
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
        </>
    )
}