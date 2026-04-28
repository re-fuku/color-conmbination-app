import type { PreviewCanvasProps } from '../../App'
import LinearBase from './LinearBase'
import LinearGradation from './LinearGradation'
import Circles from './Circles'
import RoundedRect from './RoundedRect'

export default function PreviewCanvas(props: PreviewCanvasProps) {
    // 必要なpropsを分割代入で抽出する
    const {
        colors, // 各色の情報
        angle, // 角度
        wSize, // 横幅のサイズ(%)
        hSize, // 縦のサイズ(px)
        xAspect, // x軸のアスペクト比
        yAspect, // y軸のアスペクト比
        selectedLayout // 選択されているレイアウト
    } = props

    const renderPreview = () => {

        switch (true) {
            // ➀線形
            case selectedLayout.includes('linear-base'):
                return (
                    <LinearBase
                        colors={colors}
                        angle={angle}
                    />
                )
            // ➁線形グラデーション
            case selectedLayout.includes('linear-gratiation'):
                return (
                    < LinearGradation/>
                )

            // ➄円並び
            case selectedLayout.includes('circles'):
                return (
                    <Circles
                        size={wSize}
                        colors={colors}
                    />
                )
            // ➅角丸四角形並び
            case selectedLayout.includes('rounded-rect'):
                return (
                    <RoundedRect
                        wSize={wSize}
                        hSize={hSize}
                        xAspect={xAspect}
                        yAspect={yAspect}
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