import { useState } from 'react'
import PreviewCanvas from './components/previews/PreviewCanvas'
import SidePanel from './components/sidepanels/SidePanel'

export type ColorConfig = {
  id: string
  color: string
  ratio: number
  start: number
  end: number
}

// ➀線形色表示の設定値の型
export type BaseLinearConfig = {
  angle: number
  colors: ColorConfig[]
}

// ➁線形グラデーションの設定値の型
export type GradationLinearConfig = {
  angle: number
  colors: ColorConfig[]
}

// ➂放射線グラデーションの設定値の型
export type RadialGradationConfig = {
  xPosition: number,
  yPosition: number,
  colors: ColorConfig[]
}

// ➃扇形グラデーションの設定値の型
export type ConicGradationConfig = {
  angle: number
  colors: ColorConfig[]
}

// ➄円並びの設定値の型
export type CirclesConfig = {
  size: number
  colors: ColorConfig[]
}

// ➅角丸四角形並びの設定値の型
export type RoundedRectConfig = {
  roundedRect: number
  size: number
  xAspect: number
  yAspect: number
  colors: ColorConfig[]
}

// ➆多角形並びの設定値の型
export type PoligonConfig = {
  gon: number
  size: number
  colors: ColorConfig[]
}


// ➇ヘッダーとフッターの情報の型を定義
export type HeaderFooterConfig = {
  header: {
    size: number
    roundedRect: number
    color: string
  }

  footer: {
    size: number
    roundedRect: number
    color: string
  }
}

// ➈➉マスクの情報を定義
export type MaskConfig = {
  bgColor: string
  textColor: string
}

// ⑪ボーダー&アウトラインの情報の型を定義
export type BorderOutlineConfig = {
  size: number,
  roundedRect: number,
  bgColor: string,
  borderSize: number,
  borderColor: string,
  outLineSize: number,
  outLineOffset: number,
  outLineColor: string,
}

// ⑫影落としの情報をの型を定義
export type DropShadowConfig = {
  size: number, // サイズ
  roundedRect: number, // 角丸サイズ
  xAspect: number, // アスペクト比(横)
  yAxpect: number, // アスペクト比(縦)
  bgColor: string, // 背景色
  xShadowPosition: number, // 影の位置(X座標)
  yShadowPosition: number, // 影の位置(y座標)
  shadowBlur: number, // 影のぼかし量
  shadowSize: number, // 影のサイズ
  shadowColor: string, // 影の色
  mode: '' | 'inset', // insetと切り替え
}


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


  isOpenColorPicker: boolean
  setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
  selectedLayout: string
  setSelectedLayout: (selectedLayout: string) => void
  layoutIcons: string[]
  maskParam: MaskConfig
  setMaskParam: (maskParam: MaskConfig) => void
  borderOutlineParam: BorderOutlineConfig
  setBorderOutlineParam: (borderOutlineParam: BorderOutlineConfig) => void
  dropShadowParam: DropShadowConfig
  setDropShadowParam: (dorpShadowParam: DropShadowConfig) => void
}

export type PreviewCanvasProps = {
  baseLinearParam: BaseLinearConfig
  gradationLinearParam: GradationLinearConfig
  radialGradationParam: RadialGradationConfig
  conicGradationParam: ConicGradationConfig
  circlesParam: CirclesConfig
  roundedRectParam: RoundedRectConfig
  poligonParam: PoligonConfig
  headerFooter: HeaderFooterConfig

  selectedLayout: string
  maskParam: MaskConfig
  borderOutlineParam: BorderOutlineConfig
  dropShadowParam: DropShadowConfig
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
  const [borderSize, setBorderSize] = useState<number>(100) // 境界線のサイズ
  const [gon, setGon] = useState<number>(3) // 多角形の角の数
  const [xAspect, setXAspect] = useState<number>(1) // x軸のアスペクト比
  const [yAspect, setYAspect] = useState<number>(2) // y軸のアスペクト比
  const [xPosition, setXPosition] = useState<number>(50) // 円の中心の座標(x軸)
  const [yPosition, setYPosition] = useState<number>(50) // 円の中心の座標(y軸)
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
  const [headerFooter, setHeaderFooter] = useState<HeaderFooterConfig>({ // ➇ヘッダーフッターのパラメーター
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
  const [maskParam, setMaskParam] = useState({ // マスク画像を利用する際のパラメータ
    bgColor: "#ffffff",
    textColor: "#ffffff"
  })
  const [colors, setColors] = useState<ColorConfig[]>([ // 色の設定値
    // 仮の初期値
    { id: "1", color: '#66c2b2', ratio: 50, start: 0, end: 10 },
    { id: "2", color: '#4d8dbd', ratio: 30, start: 0, end: 10 },
    { id: "3", color: '#c984c0', ratio: 20, start: 0, end: 10 },
  ])

  const [borderOutlineParam, setBorderOutlineParam] = useState<BorderOutlineConfig>({ // ⑪ボーダー&アウトラインの設定値
    size: 50,
    roundedRect: 10,
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
      yAxpect: 1,
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

    // リファクタリング
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

    isOpenColorPicker: isOpenColorPicker,
    setIsOpenColorPicker: setIsOpenColorPicker,

    colors: colors,
    setColors: setColors,
    selectedLayout: selectedLayout,
    setSelectedLayout: setSelectedLayout,
    layoutIcons: layoutIcons,
    maskParam: maskParam,
    setMaskParam: setMaskParam,
    borderOutlineParam: borderOutlineParam,
    setBorderOutlineParam: setBorderOutlineParam,
    dropShadowParam: dropShadowParam,
    setDropShadowParam: setDropShadowParam,
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

    baseLinearParam: baseLinearParam,
    gradationLinearParam: gradationLinearParam,
    radialGradationParam: radialGradationParam,
    conicGradationParam: conicGradationParam,
    circlesParam: circlesParam,
    roundedRectParam: roundedRectParam,
    poligonParam: poligonParam,
    headerFooter: headerFooter,

    borderOutlineParam: borderOutlineParam,
    dropShadowParam: dropShadowParam,
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
