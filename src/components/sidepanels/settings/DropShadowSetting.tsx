import type { DropShadowConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"
import DoubleValue from "./ui/DoubleValue"
import SingleValue from "./ui/SingleValue"
import * as Switch from '@radix-ui/react-switch'

type Props = {
    dropShadowParam: DropShadowConfig
    setDropShadowParam: (dropShadowParam: DropShadowConfig) => void
    xAspect: number
    setXAspect: (xAspect:number) => void
    yAspect: number
    setYAspect: (yAspect:number) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function DropShadowSetting({dropShadowParam, setDropShadowParam, xAspect, setXAspect, yAspect, setYAspect, commonStyles, setIsOpenColorPicker}: Props) {
    const changeObjValue = (key: keyof DropShadowConfig, value: any) => {
        const newObj = {...dropShadowParam, [key]: value}

        setDropShadowParam(newObj)
    }

    const changeToggle = (check: boolean) => {
        const newVal = check? 'inset' : ''

        changeObjValue('mode', newVal)
    }

    return (
        <>
            <SingleValue
                label="サイズ"
                value={dropShadowParam.size}
                setValue={(value) => changeObjValue('size', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="角丸サイズ"
                value={dropShadowParam.roundedRect}
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
                color={dropShadowParam.bgColor}
                label='背景色'
                setColor={(value) => changeObjValue('bgColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

             <SingleValue
                label="影X位置"
                value={dropShadowParam.xShadowPosition}
                setValue={(value) => changeObjValue('xShadowPosition', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="影Y位置"
                value={dropShadowParam.yShadowPosition}
                setValue={(value) => changeObjValue('yShadowPosition', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="影ぼかし量"
                value={dropShadowParam.shadowBlur}
                setValue={(value) => changeObjValue('shadowBlur', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="影サイズ"
                value={dropShadowParam.shadowSize}
                setValue={(value) => changeObjValue('shadowSize', value)}
                styles={commonStyles}
            />

            <ChangeColor
                color={dropShadowParam.shadowColor}
                label='影サイズ'
                setColor={(value) => changeObjValue('shadowColor', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            {/* inset切り替えボタン */}
            <div className={commonStyles.card}>
                <span>inset切り替え</span>
                <Switch.Root 
                    checked={dropShadowParam.mode==='inset'}
                    onCheckedChange={changeToggle}
                    className="flex w-10 h-6 bg-gray-500 rounded-2xl data-[state=checked]:bg-blue-300"
                >
                    <Switch.Thumb
                        className="
                            block w-5 h-5 bg-white rounded-full translate-0.5 duration-200
                            data-[state=checked]:translate-x-5
                        "
                    />
                </Switch.Root>
                    

            </div>
        </>
    )
}