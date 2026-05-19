import type { TextBlockConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"


type Props = {
    textBlockParam: TextBlockConfig
    setTextBlockParam: (textBlockParam: TextBlockConfig) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function TextBlockSetting({textBlockParam, setTextBlockParam, commonStyles, setIsOpenColorPicker}: Props) {
    const changeObjValue = (key: keyof TextBlockConfig, value: any) => {
        const newObj = {...textBlockParam, [key]: value}
        setTextBlockParam(newObj)
    }

    return (
        <>
            <ChangeColor
                color={textBlockParam.bgColor}
                label='背景色'
                setColor={(value) => changeObjValue('bgColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <ChangeColor
                color={textBlockParam.textColor}
                label='文字色'
                setColor={(value) => changeObjValue('textColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />
        </>
    )
}