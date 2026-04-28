import type { SidePanelProps } from "../../../App"
import type { AddProps } from "./SettingPanel"
import SingleValue from "./ui/SingleValue"
import ColorPersent from "./ui/ColorParcent"

export default function PoligonSetting(props: SidePanelProps & AddProps) {

    // propsの分割代入で必要なものを抽出する
    const {
        gon: gon,
        setGon: setGon,
        wSize: wSize,
        setWSize: setWSize,
        colors: colors,
        setColors: setColors,
        activeSlideIndex: activeSlideIndex,
        slideItem: slideItem,
        commonStyles: commonStyles,
    } = props

    return (
        <>
          <SingleValue
            label="角数"
            value={gon}
            setValue={setGon}
            styles={commonStyles}
          />

          <SingleValue
            label="サイズ"
            value={wSize}
            setValue={setWSize}
            styles={commonStyles}
          />

          <ColorPersent
            colors={colors}
            setColors={setColors}
            activeSlideIndex={activeSlideIndex}
            slideItem={slideItem}
            styles={commonStyles}
            parcent={false}
          />
        
        </>
    )
}