import type { IconBlockConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"


type Props = {
    iconBlockParam: IconBlockConfig
    setIconBlockParam: (iconBlockParam: IconBlockConfig) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function IconBlockSetting({iconBlockParam, setIconBlockParam, commonStyles, setIsOpenColorPicker}: Props) {
    const changeObjValue = (key: keyof IconBlockConfig, value: any) => {
            const newObj = {...iconBlockParam, [key]: value}
            setIconBlockParam(newObj)
        }
    
        return (
            <>
                <ChangeColor
                    color={iconBlockParam.bgColor}
                    label='背景色'
                    setColor={(value) => changeObjValue('bgColor', value)}
                    setIsOpenColorPicker={setIsOpenColorPicker}
                    styles={commonStyles}
                />
    
                <ChangeColor
                    color={iconBlockParam.iconColor}
                    label='アイコン色'
                    setColor={(value) => changeObjValue('iconColor', value)}
                    setIsOpenColorPicker={setIsOpenColorPicker}
                    styles={commonStyles}
                />
            </>
        )
}