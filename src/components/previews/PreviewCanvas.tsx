import type { ColorConfig, PreviewCanvasProps } from '../../App'
import BaseLinear from './BaseLinear'
import LinearGradation from './LinearGradation'
import Circles from './Circles'
import RoundedRect from './RoundedRect'
import Poligons from './Poligons'
import RadialGradation from './RadialGradation'
import ConicGradation from './ConicGradation'
import HeaderFooter from './HeaderFooter'
import MaskPreview from './MaskPreview'
import TextBlock from './TextBlock'
import BorderOutLine from './BorderOutLine'
import DropShadow from './DropShadow'

export default function PreviewCanvas(props: PreviewCanvasProps) {
    // 必要なpropsを分割代入で抽出する
    const {
        baseLinearParam, // ➀線形表示の設定値
        gradationLinearParam, // ➁線形グラデーションの設定値
        radialGradationParam, // ➂放射線グラデーションの設定値
        conicGradationParam, // ➃扇形グラデーションの設定値
        circlesParam, // ➄円並びの設定値
        roundedRectParam, // ➅角丸並びの設定値
        poligonParam, //  ➆多角形並びの設定値
        headerFooter, // ➇ヘッダ&フッタの設定値
        
        selectedLayout, // 選択されているレイアウト
        maskParam, // アイコンとテキストで使用するパラメータ
        borderOutlineParam, // ボーダー&アウトラインのパラメータ
        dropShadowParam, // 影落としのパラメータ
    } = props

    const previewBG = "h-full w-full pl-5 pr-5 rounded-[20px] flex flex-wrap shrink-0 grow-0 items-center content-center bg-white overflow-hidden"

    const gradientStr = (colors: ColorConfig[]) => colors.map((color) => {
        const mid = (color.start + color.end) / 2

        return `${color.color} ${mid}%`
    }).join(',')

    const renderPreview = () => {

        switch (true) {
            // ➀線形
            case selectedLayout.includes('base-linear'):
                return (
                    <BaseLinear
                        colors={baseLinearParam.colors}
                        angle={baseLinearParam.angle}
                        previewBG={previewBG}
                    />
                )
            // ➁線形グラデーション
            case selectedLayout.includes('gradation-linear'):
                return (
                    <LinearGradation
                        colors={gradationLinearParam.colors}
                        angle={gradationLinearParam.angle}
                        gradientStr={gradientStr}
                        previewBG={previewBG}
                    />
                )
            // ➂円形グラデーション
            case selectedLayout.includes('radial-gradation'):
                return (
                    <RadialGradation 
                        colors={radialGradationParam.colors}
                        xPosition={radialGradationParam.xPosition}
                        yPosition={radialGradationParam.yPosition}
                        gradientStr={gradientStr}
                        previewBG={previewBG}
                    />
                )
            // ➃扇形グラデーション
            case selectedLayout.includes('conic-gradation'):
                return (
                    <ConicGradation 
                        colors={conicGradationParam.colors}
                        angle={conicGradationParam.angle}
                        gradientStr={gradientStr}
                        previewBG={previewBG}
                    />
                )
            // ➄円並び
            case selectedLayout.includes('circles'):
                return (
                    <Circles
                        size={circlesParam.size}
                        colors={circlesParam.colors}
                        previewBG={previewBG}
                    />
                )
            // ➅角丸四角形並び
            case selectedLayout.includes('rounded-rect'):
                return (
                    <RoundedRect
                        wSize={roundedRectParam.size}
                        roundedRect={roundedRectParam.roundedRect}
                        xAspect={roundedRectParam.xAspect}
                        yAspect={roundedRectParam.yAspect}
                        colors={roundedRectParam.colors}
                        previewBG={previewBG}
                    />
                )
            // ➆多角形並び
            case selectedLayout.includes('poligon-tiles'):
                return (
                    <Poligons 
                        gon={poligonParam.gon}
                        size={poligonParam.size}
                        colors={poligonParam.colors}
                        previewBG={previewBG}
                    />
                )
            // ➇ヘッダフッタ
            case selectedLayout.includes('header-footer'):
                return (
                    <HeaderFooter
                        header={headerFooter.header}
                        footer={headerFooter.footer}
                        previewBG={previewBG}
                    />
                )
            // ➈テキストブロック
            case selectedLayout.includes('text-block'):
                return (
                    <TextBlock
                        selectedLayout={selectedLayout}
                        maskParam={maskParam}
                    />
                )
            // ➉アイコンブロック
            case selectedLayout.includes('icon-block'):
                return (
                    <MaskPreview
                        selectedLayout={selectedLayout}
                        maskParam={maskParam}
                    />
                )
            // ⑪ボーダー&アウトライン
            case selectedLayout.includes('border-outline'):
                return (
                    <BorderOutLine
                        borderOutlineParam={borderOutlineParam}
                        xAspect={xAspect}
                        yAspect={yAspect}
                    />
                )
            // ⑫影落とし
            case selectedLayout.includes('drop-shadow'):
                return (
                    <DropShadow
                        dropShadowParam={dropShadowParam}
                        xAspect={xAspect}
                        yAspect={yAspect}
                        previewBg={previewBG}
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