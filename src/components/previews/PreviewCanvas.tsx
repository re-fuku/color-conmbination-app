import type { PreviewCanvasProps } from '../../App'
import LinearBase from './LinearBase'
import LinearGradation from './LinearGradation'
import Circles from './Circles'

export default function PreviewCanvas(props: PreviewCanvasProps) {
    const {colors, angle,wSize,hSize, selectedLayout} = props

    const renderPreview = () => {

        switch (true) {
            // 線形
            case selectedLayout.includes('linear-base'):
                return (
                    <LinearBase
                        colors={colors}
                        angle={angle}
                    />
                )
            // 線形グラデーション
            case selectedLayout.includes('linear-gratiation'):
                return (
                    < LinearGradation/>
                )

            // 円並び
            case selectedLayout.includes('circles'):
                return (
                    <Circles
                        size={wSize}
                        colors={colors}
                    />
                )
            default:
                break
        }
    }      

    return (
        <div className="w-full pl-7.5 p-2.5">
            {renderPreview()}
        </div>
    )
}