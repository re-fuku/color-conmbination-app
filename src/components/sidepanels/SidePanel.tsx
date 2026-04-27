import LayoutPanel from './LayoutPanel'
import MeenuPanel from './MenuPanel'
import SettingPanel from './settings/SettingPanel'
import { Group, Panel, Separator } from 'react-resizable-panels'
import type { SidePanelProps } from '../../App'

export default function SidePanel(props: SidePanelProps) {
    // hover時のスタイル
    const hoverStyle = "hover:border-white hover:border-2"

    return (
        <div className="w-100 h-full bg-panel-bg-color flex flex-col gap-3 border-none">
            <Group orientation="vertical" className="h-full">
                <Panel className="relative scrollbar-hide rounded-2xl bg-panel-bg-color" defaultSize={50} minSize={20} collapsible={true}>
                    <SettingPanel 
                        {...props}
                    />
                </Panel>
                <Separator className="h-1 hover:bg-blue-500 transition-colors" />
                <Panel className="scrollbar-hide rounded-xl bg-layout-bg-color" defaultSize={50} minSize={20} collapsible={true}>
                    <LayoutPanel
                        selectedLayout={props.selectedLayout}
                        setSelectedLayout={props.setSelectedLayout}
                        layoutIcons={props.layoutIcons}
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