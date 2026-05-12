import type { HeaderFooterConfig, SidePanelProps } from "../../../App";
import ChangeColor from "./ui/ChangeColor";
import type { AddProps } from "./SettingPanel";
import SingleValue from "./ui/SingleValue";


export default function HeaderFooterSetting(props: SidePanelProps & AddProps) {
    
    const {
        header,
        setHeader,
        footer,
        setFooter,
        setIsOpenColorPicker,
        commonStyles,
    } = props

    const changeObjValue = (type:'header' | 'footer' ,key: keyof HeaderFooterConfig, value: any) => {
        const currentData = type === 'header'? header:footer
        const setter = type === 'header'? setHeader : setFooter
        const newObj = {...currentData, [key]: value}

        setter(newObj)
    }

    return (
        <>
            <SingleValue
                label="ヘッダサイズ"
                value={header.size}
                setValue={(value) => changeObjValue('header', 'size', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="ヘッダ角丸サイズ"
                value={header.roundedRect}
                setValue={(value) => changeObjValue('header', 'roundedRect', value)}
                styles={commonStyles}
            />

            <ChangeColor
                data={header}
                label='ヘッダ色'
                setColor={(value) => changeObjValue('header', 'color', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタサイズ"
                value={footer.size}
                setValue={(value) => changeObjValue('footer', 'size', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタ角丸サイズ"
                value={footer.roundedRect}
                setValue={(value) => changeObjValue('footer', 'roundedRect', value)}
                styles={commonStyles}
            />

            <ChangeColor
                data={footer}
                label='フッタ色'
                setColor={(value) => changeObjValue('footer', 'color', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />
        </>
    )
    
}