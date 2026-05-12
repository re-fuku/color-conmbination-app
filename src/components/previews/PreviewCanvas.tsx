import type { ColorStop, PreviewCanvasProps } from '../../App'
import LinearBase from './LinearBase'
import LinearGradation from './LinearGradation'
import Circles from './Circles'
import RoundedRect from './RoundedRect'
import Poligons from './Poligons'
import RadialGradation from './RadialGradation'
import ConicGradation from './ConicGradation'
import HeaderFooter from './HeaderFooter'

export default function PreviewCanvas(props: PreviewCanvasProps) {
    // 必要なpropsを分割代入で抽出する
    const {
        colors, // 各色の情報
        angle, // 角度
        wSize, // 横幅のサイズ(%)
        xPosition, // 円の中心座標(x軸)
        yPosition, // 円の中心座標(y軸)
        borderSize, // 縦のサイズ(px)
        gon, // 多角形の角の数
        xAspect, // x軸のアスペクト比
        yAspect, // y軸のアスペクト比
        header, // ヘッダの情報(サイズ、角丸サイズ、色)
        footer, // フッタの情報(サイズ、角丸サイズ、色)
        selectedLayout // 選択されているレイアウト
    } = props

    const previewBG = "h-full w-full pl-5 pr-5 rounded-[20px] flex flex-wrap shrink-0 grow-0 items-center content-center bg-white overflow-hidden"

    const gradientStr = (colors: ColorStop[]) => colors.map((color) => {
        const mid = (color.start + color.end) / 2

        return `${color.color} ${mid}%`
    }).join(',')

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
                        gradientStr={gradientStr}
                        previewBG={previewBG}
                    />
                )
            // ➂円形グラデーション
            case selectedLayout.includes('radial-gradation'):
                return (
                    <RadialGradation 
                        colors={colors}
                        xPosition={xPosition}
                        yPosition={yPosition}
                        gradientStr={gradientStr}
                        previewBG={previewBG}
                    />
                )
            // ➃扇形グラデーション
            case selectedLayout.includes('conic-gradation'):
                return (
                    <ConicGradation 
                        colors={colors}
                        angle={angle}
                        gradientStr={gradientStr}
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
            case selectedLayout.includes('header-footer'):
                return (
                    <HeaderFooter
                        header={header}
                        footer={footer}
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