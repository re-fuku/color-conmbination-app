import type { CirclesConfig, ColorConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import ColorParcentLists from "./ui/ColorParcentLists"
import SingleValue from "./ui/SingleValue"

type Props = {
    circlesParam: CirclesConfig
    setCirclesParam: (cirlesParam: CirclesConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function CirclesSetting({circlesParam, setCirclesParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...circlesParam, colors: newColors}
        setCirclesParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="サイズ"
                unit='%'
                data={circlesParam}
                setData={setCirclesParam}
                objKey={'size'}
                max={100}
                min={0}
                styles={commonStyles}
            />

            <ColorParcentLists
                data={circlesParam}
                setData={setCirclesParam}
                styles={commonStyles}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
                parcent={false}
            />

            <AddItemButton
                colors={circlesParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />
        </>
    )
}