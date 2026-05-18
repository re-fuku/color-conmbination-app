import type { ConicGradationConfig, ColorConfig } from "../../../App";
import type { CommonStyles } from "./SettingPanel";
import AddItemButton from "./ui/AddItemButton";
import ColorStartEnd from "./ui/ColorStartEnd";
import SingleValue from "./ui/SingleValue";


type Props = {
    conicGradationParam: ConicGradationConfig
    setConicGradationParam: (conicGradationParam: ConicGradationConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function ConicGradationSetting({conicGradationParam, setConicGradationParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...conicGradationParam, colors: newColors}
        setConicGradationParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="角度"
                unit='deg'
                data={conicGradationParam}
                setData={setConicGradationParam}
                objKey={'angle'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <ColorStartEnd
                data={conicGradationParam}
                setData={setConicGradationParam}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                styles={commonStyles}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
            />

            <AddItemButton
                colors={conicGradationParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />

        </>
    )
}