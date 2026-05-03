import type { PreviewCanvasProps } from '../../App'
import LinearBase from './LinearBase'
import LinearGradation from './LinearGradation'
import Circles from './Circles'
import RoundedRect from './RoundedRect'
import Poligons from './Poligons'

export default function PreviewCanvas(props: PreviewCanvasProps) {
    // 必要なpropsを分割代入で抽出する
    const {
        colors, // 各色の情報
        angle, // 角度
        wSize, // 横幅のサイズ(%)
        borderSize, // 縦のサイズ(px)
        gon, // 多角形の角の数
        xAspect, // x軸のアスペクト比
        yAspect, // y軸のアスペクト比
        selectedLayout // 選択されているレイアウト
    } = props

    const previewBG = "h-full w-full pl-5 pr-5 rounded-[20px] flex flex-wrap shrink-0 grow-0 items-center content-center bg-white overflow-hidden"

    const renderPreview = () => {

        switch (true) {
            // ➀線形
            case selectedLayout.includes('linear-base'):
                return (
                    <LinearBase
                        colors={colors}
                        angle={angle}
                        previewBG={previewBG}
                    />
                )
            // ➁線形グラデーション
            case selectedLayout.includes('linear-gradation'):
                return (
                    <LinearGradation
                        colors={colors}
                        angle={angle}
                        previewBG={previewBG}
                    />
                )

            // ➄円並び
            case selectedLayout.includes('circles'):
                return (
                    <Circles
                        size={wSize}
                        colors={colors}
                        previewBG={previewBG}
                    />
                )
            // ➅角丸四角形並び
            case selectedLayout.includes('rounded-rect'):
                return (
                    <RoundedRect
                        wSize={wSize}
                        borderSize={borderSize}
                        xAspect={xAspect}
                        yAspect={yAspect}
                        colors={colors}
                        previewBG={previewBG}
                    />
                )
            // ➆多角形並び
            case selectedLayout.includes('poligon-tiles'):
                return (
                    <Poligons 
                        gon={gon}
                        size={wSize}
                        colors={colors}
                        previewBG={previewBG}
                    />
                )

            default:
                break
        }
    }      

    return (
        <div className="w-full pl-5 p-2.5">
            {renderPreview()}
        </div>
    )
}