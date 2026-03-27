import type { ColorStop } from '../../App'
import LayoutPanel from './LayoutPanel'
import MeenuPanel from './MenuPanel'
import SettingPanel from './SettingPanel'
import { Group, Panel, Separator } from 'react-resizable-panels'

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
    // hover時のスタイル
    const hoverStyle = "hover:border-white hover:border-2"

    return (
        <div className="w-100 h-full bg-panel-bg-color flex flex-col gap-3 border-none">
            <Group orientation="vertical" className="h-full">
                <Panel className="relative scrollbar-hide" defaultSize={50} minSize={20} collapsible={true}>
                    <SettingPanel 
                        angle={angle}
                        setAngle={setAngle}
                        colors={colors}
                        setColors={setColors}
                        selectedLayout={selectedLayout}
                    />
                </Panel>
                <Separator className="h-1 hover:bg-blue-500 transition-colors" />
                <Panel className="scrollbar-hide" defaultSize={50} minSize={20} collapsible={true}>
                    <LayoutPanel
                        selectedLayout={selectedLayout}
                        setSelectedLayout={setSelectedLayout}
                        layoutIcons={layoutIcons}
                        hoverStyle={hoverStyle}
                    />

                    <MeenuPanel
                        hoverStyle={hoverStyle}
                    />
                </Panel>
            </Group>
        </div>
    )
}