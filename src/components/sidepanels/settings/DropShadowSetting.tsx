import type { DropShadowConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import ChangeColor from "./ui/ChangeColor"
import DoubleValue from "./ui/DoubleValue"
import SingleValue from "./ui/SingleValue"
import * as Switch from '@radix-ui/react-switch'

type Props = {
    dropShadowParam: DropShadowConfig
    setDropShadowParam: (dropShadowParam: DropShadowConfig) => void
    commonStyles: CommonStyles
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function DropShadowSetting({dropShadowParam, setDropShadowParam, commonStyles, setIsOpenColorPicker}: Props) {
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
                unit='%'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'size'}
                max={100}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="角丸サイズ"
                unit='px'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'roundedRect'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <DoubleValue
                xValue={dropShadowParam.xAspect}
                setXValue={(value) => changeObjValue('xAspect', value)}
                yValue={dropShadowParam.yAspect}
                setYValue={(value) => changeObjValue('yAspect', value)}
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
                unit='px'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'xShadowPosition'}
                max={50}
                min={-50}
                styles={commonStyles}
            />

            <SingleValue
                label="影Y位置"
                unit='px'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'yShadowPosition'}
                max={50}
                min={-50}
                styles={commonStyles}
            />

            <SingleValue
                label="影ぼかし量"
                unit='px'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'shadowBlur'}
                max={50}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="影サイズ"
                unit='px'
                data={dropShadowParam}
                setData={setDropShadowParam}
                objKey={'shadowSize'}
                max={50}
                min={-50}
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