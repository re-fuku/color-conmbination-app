import { useState } from 'react'
import Sidebar from './components/sidepanels/SidePanel'
import PreviewCanvas from './components/PreviewCanvas'

export type ColorStop = {
  id: string
  color: string
  ratio: number
}

function App() {
  const [angle, setAngle] = useState(0)
  const [colors, setColors] = useState<ColorStop[]>([
    { id: '1', color: '#66c2b2', ratio: 50 },
    { id: '2', color: '#4d8dbd', ratio: 30 },
    { id: '3', color: '#c984c0', ratio: 20 },
  ])

  return (
    <div className="flex h-screen w-screen bg-app-bg-color text-text-color font-sans overflow-hidden">
      <Sidebar
        angle={angle}
        setAngle={setAngle}
        colors={colors}
        setColors={setColors}
      />
      <PreviewCanvas angle={angle} colors={colors}/>
    </div>
  )
}

export default App
