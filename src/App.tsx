import { useState } from 'react'
import PreviewCanvas from './components/previews/PreviewCanvas'
import SidePanel from './components/sidepanels/SidePanel'

export type ColorStop = {
  id: string
  color: string
  ratio: number
  start: number
  end: number
}

// ヘッダーとフッターの情報の型を定義
export type HeaderFooterConfig = {
  size: number
  roundedRect: number
  color: string
}

export type MaskConfig = {
  bgColor: string
  textColor: string
}

export type SidePanelProps = {
  angle: number
  setAngle: (angle: number) => void
  wSize: number
  setWSize: (wSize: number) => void
  hSize: number
  setHSize: (wSize: number) => void
  xPosition: number
  setXPosition: (xPosition: number) => void
  yPosition: number
  setYPosition: (yPosition: number) => void
  borderSize: number
  setBorderSize: (borderSize: number) => void
  gon: number
  setGon: (gon:number) => void
  xAspect: number
  setXAspect: (xAspect: number) => void
  yAspect: number
  setYAspect: (yAspect: number) => void
  header: HeaderFooterConfig
  setHeader: (headr: HeaderFooterConfig) => void
  footer: HeaderFooterConfig
  setFooter: (footer: HeaderFooterConfig) => void
  isOpenColorPicker: boolean
  setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
  colors: ColorStop[]
  setColors: (colors: ColorStop[]) => void
  selectedLayout: string
  setSelectedLayout: (selectedLayout: string) => void
  layoutIcons: string[]
  maskParam: MaskConfig
  setMaskParam: (maskParam: MaskConfig) => void
}

export type PreviewCanvasProps = {
  angle: number
  wSize: number
  hSize: number
  xPosition: number
  yPosition: number
  borderSize: number
  gon: number
  xAspect: number
  yAspect: number
  header: HeaderFooterConfig
  footer: HeaderFooterConfig
  colors: ColorStop[]
  selectedLayout: string
  maskParam: MaskConfig
}

// レイアウトのアイコンのパスを定義
const layoutIcons = Object.values(
  import.meta.glob<{ default: string }>(
      './assets/layouts/*.svg',
      { eager: true}
  )
).map((mod) => mod.default)

function App() {
  const [angle, setAngle] = useState<number>(0) // レイアウトの角度
  const [wSize, setWSize] = useState<number>(20) // 横幅サイズ
  const [hSize, setHSize] = useState<number>(20) // 縦幅のサイズ
  const [borderSize, setBorderSize] = useState<number>(100) // 縦のサイズ
  const [gon, setGon] = useState<number>(3) // 多角形の角の数
  const [xAspect, setXAspect] = useState<number>(1) // x軸のアスペクト比
  const [yAspect, setYAspect] = useState<number>(2) // y軸のアスペクト比
  const [xPosition, setXPosition] = useState<number>(50) // 円の中心の座標(x軸)
  const [yPosition, setYPosition] = useState<number>(50) // 円の中心の座標(y軸)
  const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false) // カラーピッカーが開いているか
  const [header, setHeader] = useState<HeaderFooterConfig>({ // ヘッダーのパラメーター
    size: 10,
    roundedRect: 10,
    color: "#ffffff",
  })
  const [footer, setFooter] = useState<HeaderFooterConfig>({ // フッターのパラメーター
    size: 10,
    roundedRect: 10,
    color: "#ffffff",
  })
  const [maskParam, setMaskParam] = useState({ // マスク画像を利用する際のパラメータ
    bgColor: "#ffffff",
    textColor: "#ffffff"
  })
  const [colors, setColors] = useState<ColorStop[]>([ // 色の設定値
    // 仮の初期値
    { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
    { id: "2", color: '#4d8dbd', ratio: 30, start: 0, end: 10 },
    { id: "3", color: '#c984c0', ratio: 20, start: 0, end: 10 },
  ])

  const [selectedLayout, setSelectedLayout] = useState<string>('src\assets\layouts\linear-base.svg') // 選択されているレイアウト

  // サイドパネル用のprops
  const sidePanelProps = {
    angle: angle,
    setAngle: setAngle,
    wSize: wSize,
    setWSize: setWSize,
    hSize: hSize,
    setHSize: setHSize,
    xPosition: xPosition,
    setXPosition: setXPosition,
    yPosition: yPosition,
    setYPosition: setYPosition,
    borderSize: borderSize,
    setBorderSize: setBorderSize,
    gon: gon,
    setGon: setGon,
    xAspect: xAspect,
    setXAspect: setXAspect,
    yAspect: yAspect,
    setYAspect: setYAspect,
    isOpenColorPicker: isOpenColorPicker,
    setIsOpenColorPicker: setIsOpenColorPicker,
    header: header,
    setHeader: setHeader,
    footer: footer,
    setFooter: setFooter,
    colors: colors,
    setColors: setColors,
    selectedLayout: selectedLayout,
    setSelectedLayout: setSelectedLayout,
    layoutIcons: layoutIcons,
    maskParam: maskParam,
    setMaskParam: setMaskParam,
  }

  // プレビュー用のprops
  const previewCanvasProps = {
    selectedLayout: selectedLayout,
    colors: colors,
    angle: angle,
    wSize: wSize,
    hSize: hSize,
    xPosition: xPosition,
    yPosition: yPosition,
    borderSize: borderSize,
    gon: gon,
    xAspect: xAspect,
    yAspect: yAspect,
    header: header,
    footer: footer,
    maskParam: maskParam,
  }

  return (
    <div className="flex h-screen w-screen p-2.5 bg-app-bg-color text-text-color font-sans overflow-hidden">
      <SidePanel
        {...sidePanelProps}
      />
      <PreviewCanvas
        {...previewCanvasProps}
      />
    </div>
  )
}

export default App
