import type { HeaderFooterConfig, SidePanelProps } from "../../../App";
import ChangeColor from "./ui/ChangeColor";
import type { AddProps, CommonStyles } from "./SettingPanel";
import SingleValue from "./ui/SingleValue";

type Props = {
    headerFooter: HeaderFooterConfig
    setHeaderFooter: (headerFooter: HeaderFooterConfig) => void
    setIsOpenColorPicker: boolean
    commonStyles: CommonStyles
}


export default function HeaderFooterSetting({headerFooter, setHeaderFooter, setIsOpenColorPicker, commonStyles}: Props) {

    const changeObjValue = (type:'header' | 'footer' ,key: string, value: any) => {
        const currentData = type === 'header'? headerFooter.header: headerFooter.footer
        const newObj = {...currentData, [key]: value}
        const newHeaderFooter = {...headerFooter, [type]: newObj}

        setHeaderFooter(newHeaderFooter)
    }

    return (
        <>
            <SingleValue
                label="ヘッダサイズ"
                unit='px'
                data={headerFooter.header}
                setData={(value) => changeObjValue('header','size', value)}
                objKey={'size'}
                max={360}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="角丸サイズ"
                unit='px'
                data={headerFooter.header}
                setData={(value) => changeObjValue('header','size', value)}
                objKey={'size'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            {/* <ChangeColor
                color={headerFooter.header.color}
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
                color={footer.color}
                label='フッタ色'
                setColor={(value) => changeObjValue('footer', 'color', value)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            /> */}
        </>
    )
    
}