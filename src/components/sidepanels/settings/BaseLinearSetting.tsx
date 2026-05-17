import SingleValue from "./ui/SingleValue"
import ColorParcentLists from "./ui/ColorParcentLists"
import AddItemButton from "./ui/AddItemButton"
import type { BaseLinerConfig, ColorConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"


type Props = {
    baseLinerParam: BaseLinerConfig
    setBaseLinerParam: (baseLInerParam: BaseLinerConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function BaseLinerSetting({baseLinerParam, setBaseLinerParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...baseLinerParam, colors: newColors}
        setBaseLinerParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="角度"
                unit='deg'
                data={baseLinerParam}
                setData={setBaseLinerParam}
                objKey={'angle'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <ColorParcentLists
                colors={baseLinerParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
                parcent={true}
            />

            <AddItemButton
                colors={baseLinerParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />
        </>
    )
}