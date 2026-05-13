import type { MaskConfig, SidePanelProps } from "../../../App";
import type { AddProps } from "./SettingPanel";
import ChangeColor from "./ui/ChangeColor";


export default function BlockSetting(props : SidePanelProps & AddProps) {

    const {
        maskParam,
        setMaskParam,
        commonStyles,
        setIsOpenColorPicker,
    } = props

    const changeObjValue = (key: keyof MaskConfig ,value: string) => {
           setMaskParam({...maskParam, [key]: value})
        }


    return (
        <>
            <ChangeColor
                color={maskParam.bgColor}
                label='背景色'
                setColor={(value) => changeObjValue('bgColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <ChangeColor
                color={maskParam.textColor}
                label='文字色'
                setColor={(value) => changeObjValue('textColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />
        </>
    )
}