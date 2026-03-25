import type { ColorStop } from '../../App'
import LayoutPanel from './LayoutPanel'
import SettingPanel from './SettingPanel'

type Props = {
    angle: number
    setAngle: (val: number) => void
    colors: ColorStop[]
    setColors: (colors: ColorStop[]) => void
    selectedLayout: string
    setSelectedLayout: (index: string) => void
    layoutIcons: string[]
}

export default function SidePanel({ angle, setAngle, colors, setColors,selectedLayout, setSelectedLayout, layoutIcons }: Props) {
    return (
        <div className="w-[400px] h-full bg-panel-bg-color p-5 flex flex-col gap-3 border-none">
            <SettingPanel 
                angle={angle}
                setAngle={setAngle}
                colors={colors}
                setColors={setColors}
                selectedLayout={selectedLayout}
            />
            <LayoutPanel
                selectedLayout={selectedLayout}
                setSelectedLayout={setSelectedLayout}
                layoutIcons={layoutIcons}
            />
        </div>
    )
}