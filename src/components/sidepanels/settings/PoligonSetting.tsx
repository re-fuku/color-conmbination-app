import type { ColorConfig, PoligonConfig } from "../../../App"
import type { CommonStyles } from "./SettingPanel"
import SingleValue from "./ui/SingleValue"
import AddItemButton from "./ui/AddItemButton"
import ColorParcentLists from "./ui/ColorParcentLists"

type Props = {
  poligonParam: PoligonConfig
  setPoligonParam: (poligonParams: PoligonConfig) => void
  commonStyles: CommonStyles
  activeSlideIndex: number | null
  slideItem: (index: number) => void
  isOpenColorPicker: boolean
  setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function PoligonSetting({poligonParam, setPoligonParam, commonStyles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {

    const updateColors = (newColors: ColorConfig[]) => {
        const newObj = {...poligonParam, colors: newColors}
        setPoligonParam(newObj)
    }

    return (
        <>
          <SingleValue
              label="角数"
              unit='gon'
              data={poligonParam}
              setData={setPoligonParam}
              objKey={'gon'}
              max={8}
              min={3}
              styles={commonStyles}
          />

          <SingleValue
              label="サイズ"
              unit='%'
              data={poligonParam}
              setData={setPoligonParam}
              objKey={'size'}
              max={100}
              min={0}
              styles={commonStyles}
          />

          <ColorParcentLists
              data={poligonParam}
              setData={setPoligonParam}
              styles={commonStyles}
              activeSlideIndex={activeSlideIndex}
              slideItem={slideItem}
              isOpenColorPicker={isOpenColorPicker}
              setIsOpenColorPicker={setIsOpenColorPicker}
              parcent={false}
          />

          <AddItemButton
            colors={poligonParam.colors}
            setColors={(newColors) => updateColors(newColors)}
            styles={commonStyles}
          />
        
        </>
    )
}