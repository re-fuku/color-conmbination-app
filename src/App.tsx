import { useState } from 'react'
import PreviewCanvas from './components/previews/PreviewCanvas'
import SidePanel from './components/sidepanels/SidePanel'

export type ColorConfig = {
  id: string // id
  color: string // 色コード
  ratio: number // 割合
  start: number // 開始位置
  end: number // 終了位置
}

// ➀線形色表示の設定値の型
export type BaseLinearConfig = {
  angle: number // 角度
  colors: ColorConfig[] // 色の情報
}

// ➁線形グラデーションの設定値の型
export type GradationLinearConfig = {
  angle: number // 角度
  colors: ColorConfig[] // 色の情報
}

// ➂放射線グラデーションの設定値の型
export type RadialGradationConfig = {
  xPosition: number, // X座標位置
  yPosition: number, // Y座標位置
  colors: ColorConfig[] // 色の情報
}

// ➃扇形グラデーションの設定値の型
export type ConicGradationConfig = {
  angle: number // 角度
  colors: ColorConfig[] // 色の情報
}

// ➄円並びの設定値の型
export type CirclesConfig = {
  size: number // サイズ
  colors: ColorConfig[] // 色の情報
}

// ➅角丸四角形並びの設定値の型
export type RoundedRectConfig = {
  roundedRect: number // 角丸サイズ
  size: number // サイズ
  xAspect: number // アスペクト比(横)
  yAspect: number // アスペクト比(縦)
  colors: ColorConfig[] // 色の情報
}

// ➆多角形並びの設定値の型
export type PoligonConfig = {
  gon: number // 角数
  size: number // サイズ
  colors: ColorConfig[] // 色の情報
}


// ➇ヘッダーとフッターの情報の型を定義
export type HeaderFooterConfig = {
  header: {
    size: number // サイズ
    roundedRect: number // 角丸サイズ
    color: string // 色
  }

  footer: {
    size: number // サイズ
    roundedRect: number // 角丸サイズ
    color: string // 色
  }
}

// ➈テキストブロックの情報の型を定義
export type TextBlockConfig = {
  bgColor: string // 背景色
  textColor: string // 文字の色
}

// ➉アイコンブロックの情報の型を定義
export type IconBlockConfig = {
  bgColor: string // 背景色
  iconColor: string // アイコンの色
}


// ⑪ボーダー&アウトラインの情報の型を定義
export type BorderOutlineConfig = {
  size: number, // サイズ
  roundedRect: number, // 角丸サイズ
  xAspect: number, // アスペクト比(横)
  yAspect: number, // アスペクト比(縦)
  bgColor: string, // 背景色
  borderSize: number, // ボーダーのサイズ
  borderColor: string, // ボーダーの色
  outLineSize: number, // アウトラインのサイズ
  outLineOffset: number, // アウトラインの位置
  outLineColor: string, // アウトラインの色
}

// ⑫影落としの情報をの型を定義
export type DropShadowConfig = {
  size: number, // サイズ
  roundedRect: number, // 角丸サイズ
  xAspect: number, // アスペクト比(横)
  yAspect: number, // アスペクト比(縦)
  bgColor: string, // 背景色
  xShadowPosition: number, // 影の位置(X座標)
  yShadowPosition: number, // 影の位置(y座標)
  shadowBlur: number, // 影のぼかし量
  shadowSize: number, // 影のサイズ
  shadowColor: string, // 影の色
  mode: '' | 'inset', // insetと切り替え
}

// サイドパネルに渡すProps
export type SidePanelProps = {
  baseLinearParam: BaseLinearConfig
  setBaseLinearParam: (baseLinearParam: BaseLinearConfig) => void
  gradationLinearParam: GradationLinearConfig
  setGradationLinearParam: (gradationLinearParam: GradationLinearConfig) => void
  radialGradationParam: RadialGradationConfig
  setRadialGradationParam: (radialGradationParam: RadialGradationConfig) => void
  conicGradationParam: ConicGradationConfig
  setConicGradationParam: (conicGradationParam: ConicGradationConfig) => void
  circlesParam: CirclesConfig
  setCirclesParam: (circlesParam: CirclesConfig) => void
  roundedRectParam: RoundedRectConfig
  setRoundedRectParam: (roundedRectParam: RoundedRectConfig) => void
  poligonParam: PoligonConfig
  setPoligonParam: (poligonParam: PoligonConfig) => void
  headerFooter: HeaderFooterConfig
  setHeaderFooter: (headerFooter: HeaderFooterConfig) => void
  textBlockParam: TextBlockConfig
  setTextBlockParam: (textBlockParam: TextBlockConfig) => void
  iconBlockParam: IconBlockConfig
  setIconBlockParam: (iconBlockParam: IconBlockConfig) => void
  borderOutlineParam: BorderOutlineConfig
  setBorderOutlineParam: (borderOutlineParam: BorderOutlineConfig) => void
  dropShadowParam: DropShadowConfig
  setDropShadowParam: (dorpShadowParam: DropShadowConfig) => void
  isOpenColorPicker: boolean
  setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
  selectedLayout: string
  setSelectedLayout: (selectedLayout: string) => void
  layoutIcons: string[]
}

// PreviewCanvasに渡すProps
export type PreviewCanvasProps = {
  baseLinearParam: BaseLinearConfig
  gradationLinearParam: GradationLinearConfig
  radialGradationParam: RadialGradationConfig
  conicGradationParam: ConicGradationConfig
  circlesParam: CirclesConfig
  roundedRectParam: RoundedRectConfig
  poligonParam: PoligonConfig
  headerFooter: HeaderFooterConfig
  textBlockParam: TextBlockConfig
  iconBlockParam: IconBlockConfig
  borderOutlineParam: BorderOutlineConfig
  dropShadowParam: DropShadowConfig

  selectedLayout: string
}

// レイアウトのアイコンのパス
const layoutIcons = Object.values(
  import.meta.glob<{ default: string }>(
      './assets/layouts/*.svg',
      { eager: true}
  )
).map((mod) => mod.default)

function App() {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState<boolean>(false) // カラーピッカーが開いているか

  const [baseLinearParam, setBaseLinearParam] = useState<BaseLinearConfig>({ // ➀線形色表示の設定値
      angle: 0,
      colors: [
        { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
      ]
  })
  const [gradationLinearParam, setGradationLinearParam] = useState<GradationLinearConfig>({ // ➁線形グラデーションの設定値
    angle: 0,
    colors: [
        { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
        { id: "2", color: '#4d8dbd', ratio: 30, start: 0, end: 10 },
    ]
  })
  const [radialGradationParam, setRadialGradationParam] = useState<RadialGradationConfig>({ // ➂放射線グラデーションの設定値
    xPosition: 50,
    yPosition: 50,
    colors: [
      { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
      { id: "2", color: '#4d8dbd', ratio: 30, start: 0, end: 10 },
    ]
  })
  const [conicGradationParam, setConicGradationParam] = useState<ConicGradationConfig>({ // ➃扇形グラデーションの設定値
    angle: 0,
    colors: [
      { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
      { id: "2", color: '#4d8dbd', ratio: 30, start: 0, end: 10 },
    ]
  })
  const [circlesParam, setCirclesParam] = useState<CirclesConfig>({ // ➄円形並びの設定値
    size: 20,
    colors: [
      { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
    ]
  })
  const [roundedRectParam, setRoundedRectParam] = useState<RoundedRectConfig>({ // ➅角丸四角並びの設定値
    roundedRect: 10,
    size: 20,
    xAspect: 1,
    yAspect: 1,
    colors: [
      { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
    ]
  })
  const [poligonParam, setPoligonParam] = useState<PoligonConfig>({ // ➆多角形並びの設定値
    gon: 3,
    size: 20,
    colors: [
          { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
    ]
  })
  const [headerFooter, setHeaderFooter] = useState<HeaderFooterConfig>({ // ➇ヘッダーフッターの設定値
    header: {
      size: 10,
      roundedRect: 10,
      color: "#ffffff",
    },
    footer: {
      size: 10,
      roundedRect: 10,
      color: "#ffffff",
    }
  })
  const [textBlockParam, setTextBlockParam] = useState<TextBlockConfig>({ // ➈テキストブロックの設定値
    bgColor: '#ffffff',
    textColor: '#ffffff',
  })
  const [iconBlockParam, setIconBlockParam] = useState<IconBlockConfig>({ // ➉アイコンブロックの設定値
    bgColor: '#ffffff',
    iconColor: '#ffffff'
  })

  const [borderOutlineParam, setBorderOutlineParam] = useState<BorderOutlineConfig>({ // ⑪ボーダー&アウトラインの設定値
    size: 50,
    roundedRect: 10,
    xAspect: 1,
    yAspect: 1,
    bgColor: '#ffffff',
    borderSize: 2,
    borderColor: '#ffffff',
    outLineSize: 2,
    outLineOffset: 0,
    outLineColor: '#ffffff',
  })
  const [dropShadowParam, setDropShadowParam] = useState<DropShadowConfig>({ // ⑫影落としの設定値
      size: 50,
      roundedRect: 10,
      xAspect: 1,
      yAspect: 1,
      bgColor: '#ffffff',
      xShadowPosition: 0,
      yShadowPosition: 0,
      shadowBlur: 0,
      shadowSize: 0,
      shadowColor: '#000000',
      mode: '',
  })
  const [selectedLayout, setSelectedLayout] = useState<string>('') // 選択されているレイアウト


  // サイドパネル用のprops
  const sidePanelProps = {
    baseLinearParam: baseLinearParam,
    setBaseLinearParam: setBaseLinearParam,
    gradationLinearParam: gradationLinearParam,
    setGradationLinearParam: setGradationLinearParam,
    radialGradationParam: radialGradationParam,
    setRadialGradationParam: setRadialGradationParam,
    conicGradationParam: conicGradationParam,
    setConicGradationParam: setConicGradationParam,
    circlesParam: circlesParam,
    setCirclesParam: setCirclesParam,
    roundedRectParam: roundedRectParam,
    setRoundedRectParam: setRoundedRectParam,
    poligonParam: poligonParam,
    setPoligonParam: setPoligonParam,
    headerFooter: headerFooter,
    setHeaderFooter: setHeaderFooter,
    textBlockParam: textBlockParam,
    setTextBlockParam: setTextBlockParam,
    iconBlockParam: iconBlockParam,
    setIconBlockParam: setIconBlockParam,
    borderOutlineParam: borderOutlineParam,
    setBorderOutlineParam: setBorderOutlineParam,
    dropShadowParam: dropShadowParam,
    setDropShadowParam: setDropShadowParam,
    isOpenColorPicker: isOpenColorPicker,
    setIsOpenColorPicker: setIsOpenColorPicker,
    selectedLayout: selectedLayout,
    setSelectedLayout: setSelectedLayout,
    layoutIcons: layoutIcons,
  }

  // プレビュー用のprops
  const previewCanvasProps = {
    selectedLayout: selectedLayout,
    baseLinearParam: baseLinearParam,
    gradationLinearParam: gradationLinearParam,
    radialGradationParam: radialGradationParam,
    conicGradationParam: conicGradationParam,
    circlesParam: circlesParam,
    roundedRectParam: roundedRectParam,
    poligonParam: poligonParam,
    headerFooter: headerFooter,
    textBlockParam: textBlockParam,
    iconBlockParam: iconBlockParam,
    borderOutlineParam: borderOutlineParam,
    dropShadowParam: dropShadowParam,
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
