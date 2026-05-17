import type { BorderOutlineConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"
import DoubleValue from "./ui/DoubleValue"
import SingleValue from "./ui/SingleValue"

type Props = {
    borderOutlineParam: BorderOutlineConfig
    setBorderOutlineParam: (borderOutlineParam: BorderOutlineConfig) => void
    xAspect: number
    setXAspect: (xAspect:number) => void
    yAspect: number
    setYAspect: (yAspect: number) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function BorderOutlineSetting({borderOutlineParam, setBorderOutlineParam,xAspect, setXAspect, yAspect, setYAspect, commonStyles, setIsOpenColorPicker}: Props) {
    const changeObjValue = (key: keyof BorderOutlineConfig, value: any) => {
        const newObj = {...borderOutlineParam, [key]: value}

        setBorderOutlineParam(newObj)
    }
    return (
        <>
            <SingleValue
                label="サイズ"
                value={borderOutlineParam.size}
                setValue={(value) => changeObjValue('size', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="角丸サイズ"
                value={borderOutlineParam.roundedRect}
                setValue={(value) => changeObjValue('roundedRect', value)}
                styles={commonStyles}
            />

            <DoubleValue
                xValue={xAspect}
                setXValue={setXAspect}
                yValue={yAspect}
                setYValue={setYAspect}
                styles={commonStyles}
            />

            <ChangeColor
                color={borderOutlineParam.bgColor}
                label='背景色'
                setColor={(value) => changeObjValue('bgColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <SingleValue
                label="ボーダーサイズ"
                value={borderOutlineParam.borderSize}
                setValue={(value) => changeObjValue('borderSize', value)}
                styles={commonStyles}
            />

            <ChangeColor
                color={borderOutlineParam.borderColor}
                label='ボーダー色'
                setColor={(value) => changeObjValue('borderColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <SingleValue
                label="アウトラインサイズ"
                value={borderOutlineParam.outLineSize}
                setValue={(value) => changeObjValue('outLineSize', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="アウトラインオフセット"
                value={borderOutlineParam.outLineOffset}
                setValue={(value) => changeObjValue('outLineOffset', value)}
                styles={commonStyles}
            />
            
            <ChangeColor
                color={borderOutlineParam.outLineColor}
                label='アウトライン色'
                setColor={(value) => changeObjValue('outLineColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />
        </>
    )
}