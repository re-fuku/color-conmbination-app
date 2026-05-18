import type { HeaderFooterConfig } from "../../../App";
import ChangeColor from "./ui/ChangeColor";
import type { CommonStyles } from "./SettingPanel";
import SingleValue from "./ui/SingleValue";

type Props = {
    headerFooter: HeaderFooterConfig
    setHeaderFooter: (headerFooter: HeaderFooterConfig) => void
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
    commonStyles: CommonStyles
}


export default function HeaderFooterSetting({headerFooter, setHeaderFooter, setIsOpenColorPicker, commonStyles}: Props) {

    const changeObjValue = (key: 'header' | 'footer', obj: Record<string, any>) => {
        const newHeaderFooter = {...headerFooter, [key]: obj}
        setHeaderFooter(newHeaderFooter)
    }

    const changeColorCode = (key: 'header' | 'footer', colorCode: string) => {
        const newObj = {...headerFooter[key], 'color': colorCode}
        const newHeaderFooter = {...headerFooter, [key]: newObj}

        setHeaderFooter(newHeaderFooter)
    }

    return (
        <>
            <SingleValue
                label="ヘッダサイズ"
                unit='px'
                data={headerFooter.header}
                setData={(obj) => changeObjValue('header', obj)}
                objKey={'size'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="ヘッダ角丸サイズ"
                unit='px'
                data={headerFooter.header}
                setData={(obj) => changeObjValue('header', obj)}
                objKey={'roundedRect'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <ChangeColor
                color={headerFooter.header.color}
                label='ヘッダ色'
                setColor={(colorCode) => changeColorCode('header', colorCode)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタサイズ"
                unit='px'
                data={headerFooter.footer}
                setData={(obj) => changeObjValue('footer', obj)}
                objKey={'size'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタ角丸サイズ"
                unit='px'
                data={headerFooter.footer}
                setData={(obj) => changeObjValue('footer', obj)}
                objKey={'roundedRect'}
                max={999}
                min={0}
                styles={commonStyles}
            />

            <ChangeColor
                color={headerFooter.footer.color}
                label='フッタ色'
                setColor={(colorCode) => changeColorCode('footer', colorCode)}
                setIsOpenColorPicker={setIsOpenColorPicker}
                styles={commonStyles}
            />
        </>
    )
    
}