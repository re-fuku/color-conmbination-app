import type { SidePanelProps } from "../../../App";
import type { AddProps } from "./SettingPanel";
import ColorPersent from "./ui/ColorParcent";
import SingleValue from "./ui/SingleValue";


export default function HeaderAndFootterSetting(props: SidePanelProps & AddProps) {
    
    const {
        headerSize,
        setHeaderSize,
        headerRoundedRect,
        setHeaderRoundedRect,
        footerSize,
        setFooterSize,
        footerRoundedRect,
        setFooterRoundedRect,
        colors,
        setColors,
        commonStyles,
    } = props

    return (
        <>
            <SingleValue
                label="ヘッダーサイズ"
                value={headerSize}
                setValue={setHeaderSize}
                styles={commonStyles}
            />

            <SingleValue
                label="ヘッダー角丸サイズ"
                value={headerRoundedRect}
                setValue={setHeaderRoundedRect}
                styles={commonStyles}
            />

            <SingleValue
                label="フッターサイズ"
                value={footerSize}
                setValue={setFooterSize}
                styles={commonStyles}
            />

            <SingleValue
                label="フッター角丸サイズ"
                value={footerRoundedRect}
                setValue={setFooterRoundedRect}
                styles={commonStyles}
            />


        </>
    )
    
}