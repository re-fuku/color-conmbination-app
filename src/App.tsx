import { useState } from 'react'
import PreviewCanvas from './components/PreviewCanvas'
import SidePanel from './components/sidepanels/SidePanel'

export type ColorStop = {
  id: string
  color: string
  ratio: number
}

// レイアウトのアイコンのパスを定義
const layoutIcons = Object.values(
  import.meta.glob<{ default: string }>(
      './assets/layouts/*.svg',
      { eager: true}
  )
).map((mod) => mod.default)


function App() {
  const [angle, setAngle] = useState(0)
  const [colors, setColors] = useState<ColorStop[]>([
    // 仮の初期値
    { id: "1", color: '#66c2b2', ratio: 50 },
    { id: "2", color: '#4d8dbd', ratio: 30 },
    { id: "3", color: '#c984c0', ratio: 20 },
  ])

  const [selectedLayout, setSelectedLayout] = useState<string>('')

  return (
    <div className="flex h-screen w-screen bg-app-bg-color text-text-color font-sans overflow-hidden">
      <SidePanel
        angle={angle}
        setAngle={setAngle}
        colors={colors}
        setColors={setColors}
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}
        layoutIcons={layoutIcons}
      />
      <PreviewCanvas
        angle={angle}
        colors={colors}
        selectedLayout={selectedLayout}
        layoutIcons={layoutIcons}
      />
    </div>
  )
}

export default App
