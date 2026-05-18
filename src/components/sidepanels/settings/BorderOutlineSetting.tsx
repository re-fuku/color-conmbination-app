import type { BorderOutlineConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"
import DoubleValue from "./ui/DoubleValue"
import SingleValue from "./ui/SingleValue"

type Props = {
    borderOutlineParam: BorderOutlineConfig
    setBorderOutlineParam: (borderOutlineParam: BorderOutlineConfig) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function BorderOutlineSetting({borderOutlineParam, setBorderOutlineParam, commonStyles, setIsOpenColorPicker}: Props) {
    const changeObjValue = (key: keyof BorderOutlineConfig, value: any) => {
        const newObj = {...borderOutlineParam, [key]: value}

        setBorderOutlineParam(newObj)
    }
    return (
        <>
            <SingleValue
                label="サイズ"
                unit='%'
                data={borderOutlineParam}
                setData={setBorderOutlineParam}
                objKey={'size'}
                max={100}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="角丸サイズ"
                unit='px'
                data={borderOutlineParam}
                setData={setBorderOutlineParam}
                objKey={'roundedRect'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <DoubleValue
                xValue={borderOutlineParam.xAspect}
                setXValue={(value) => changeObjValue('xAspect', value)}
                yValue={borderOutlineParam.yAspect}
                setYValue={(value) => changeObjValue('yAspect', value)}
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
                unit='px'
                data={borderOutlineParam}
                setData={setBorderOutlineParam}
                objKey={'borderSize'}
                max={50}
                min={0}
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
                unit='px'
                data={borderOutlineParam}
                setData={setBorderOutlineParam}
                objKey={'outLineSize'}
                max={50}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="アウトラインオフセット"
                unit='px'
                data={borderOutlineParam}
                setData={setBorderOutlineParam}
                objKey={'outLineOffset'}
                max={50}
                min={-50}
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