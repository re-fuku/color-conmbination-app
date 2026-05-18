import type { ColorConfig, RoundedRectConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import SingleValue from "./ui/SingleValue"
import ColorParcentLists from "./ui/ColorParcentLists"
import DoubleValue from "./ui/DoubleValue"

type Props = {
    roundedRectParam: RoundedRectConfig
    setRoundedRectParam: (roundedRectParam: RoundedRectConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function RoundedRectSetting({roundedRectParam, setRoundedRectParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {
    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...roundedRectParam, colors: newColors}
        setRoundedRectParam(newObj)
    }

    const updateValue = (key: keyof RoundedRectConfig, value: any) => {
        const newObj = {...roundedRectParam, [key]: value}
        setRoundedRectParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="角丸サイズ"
                unit='px'
                data={roundedRectParam}
                setData={setRoundedRectParam}
                objKey={'roundedRect'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="サイズ"
                unit='%'
                data={roundedRectParam}
                setData={setRoundedRectParam}
                objKey={'size'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <DoubleValue
                xValue={roundedRectParam.xAspect}
                setXValue={(value) => updateValue('xAspect', value)}
                yValue={roundedRectParam.yAspect}
                setYValue={(value) => updateValue('yAspect', value)}
                styles={commonStyles}
            />
            
            <ColorParcentLists
                data={roundedRectParam}
                setData={setRoundedRectParam}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
                parcent={false}
            />

            <AddItemButton
                colors={roundedRectParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />
        </>
    )
}