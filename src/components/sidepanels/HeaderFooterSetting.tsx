import type { SidePanelProps } from "../../App";
import type { AddProps } from "./settings/SettingPanel";
import type { HeaderFooterConfig } from "../../App";
import SingleValue from "./settings/ui/SingleValue";


export default function HeaderFooterSetting(props: SidePanelProps & AddProps) {

    const {
        header: header,
        setHeader: setHeader,
        footer: footer,
        setFooter: setFooter,
        colors: colors,
        commonStyles: commonStyles,
    } = props

    const changeParam = (type: 'header' | 'footer', key: keyof HeaderFooterConfig , value: any) => {
        const data = type === 'header'? header : footer
        const setter = type === 'header'? setHeader : setFooter 

        setter({
            ...data,
            [key]: value
        })
    }

    return (
        <>
            <SingleValue
                label="ヘッダサイズ"
                value={header.size}
                setValue={(value) => changeParam('header', 'size', value )}
                styles={commonStyles}
            />

            <SingleValue
                label="ヘッダ角丸サイズ"
                value={header.roundedRect}
                setValue={(value) => changeParam('header', 'roundedRect', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタサイズ"
                value={footer.size}
                setValue={(value) => changeParam('footer', 'size', value)}
                styles={commonStyles}
            />

            <SingleValue
                label="フッタ角丸サイズ"
                value={footer.roundedRect}
                setValue={(value) => changeParam('footer', 'roundedRect', value)}
                styles={commonStyles}
            />
        </>
    )
}