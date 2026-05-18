import type { ColorConfig, RadialGradationConfig} from "../../../App";
import type { CommonStyles } from "./SettingPanel";
import AddItemButton from "./ui/AddItemButton";
import ColorStartEnd from "./ui/ColorStartEnd";
import SingleValue from "./ui/SingleValue";

type Props = {
    radialGradationParam: RadialGradationConfig
    setRadialGradationParam: (radialGradationParam: RadialGradationConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void

}

export default function RadialGradationSetting({radialGradationParam, setRadialGradationParam, commonStyles, activeSlideIndex,slideItem, isOpenColorPicker,setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...radialGradationParam, colors: newColors}
        setRadialGradationParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="X位置"
                unit='px'
                data={radialGradationParam}
                setData={setRadialGradationParam}
                objKey={'xPosition'}
                max={100}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="Y位置"
                unit='px'
                data={radialGradationParam}
                setData={setRadialGradationParam}
                objKey={'yPosition'}
                max={100}
                min={0}
                styles={commonStyles}
            />

            <ColorStartEnd
                data={radialGradationParam}
                setData={setRadialGradationParam}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                styles={commonStyles}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
            />

            <AddItemButton
                colors={radialGradationParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />
        </>
    )
}