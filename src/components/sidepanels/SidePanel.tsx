import type { ColorStop } from '../../App'
import LayoutPanel from './LayoutPanel'
import SettingPanel from './SettingPanel'

type Props = {
    angle: number
    setAngle: (val: number) => void
    colors: ColorStop[]
    setColors: (colors: ColorStop[]) => void;
}

export default function Sidebar({ angle, setAngle, colors }: Props) {
    return (
        <div className="w-[400px] h-full bg-panel-bg-color p-5 flex flex-col gap-3 border-none">
            <SettingPanel 
                angle={angle}
                setAngle={setAngle}
                colors={colors}
                setColors={function (c: ColorStop[]): void {
                    throw new Error('Function not implemented.')
                } }
            />
            <LayoutPanel />
        </div>
    )
}