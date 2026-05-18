import type { ColorConfig, GradationLinearConfig} from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import AddItemButton from "./ui/AddItemButton"
import ColorStartEnd from "./ui/ColorStartEnd"
import SingleValue from "./ui/SingleValue"

type Props = {
    gradationLinearParam: GradationLinearConfig
    setGradationLinearParam: (gradationLinearParam: GradationLinearConfig) => void
    commonStyles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function GradiationLinearSetting({gradationLinearParam, setGradationLinearParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...gradationLinearParam, colors: newColors}
        setGradationLinearParam(newObj)
    }

    return (
        <>
            <SingleValue
                label="角度"
                unit='deg'
                data={gradationLinearParam}
                setData={setGradationLinearParam}
                objKey={'angle'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <ColorStartEnd
                data={gradationLinearParam}
                setData={setGradationLinearParam}
                activeSlideIndex={activeSlideIndex}
                slideItem={slideItem}
                styles={commonStyles}
                isOpenColorPicker={isOpenColorPicker}
                setIsOpenColorPicker={setIsOpenColorPicker}
            />

            <AddItemButton
                colors={gradationLinearParam.colors}
                setColors={(newColors) => updateColors(newColors)}
                styles={commonStyles}
            />
        </>
    )
}