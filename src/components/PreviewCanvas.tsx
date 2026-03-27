import type { ColorStop } from '../App'

type Props = {
    angle: number
    colors: ColorStop[]
    selectedLayout: string
    layoutIcons: string[]
}

export default function PreviewCanvas({ angle, colors, selectedLayout, layoutIcons }:Props){
    // グラデーションの境界部分の作成
    let currentPos = 0
    const stops = colors.map(c => {
        const start = currentPos
        currentPos += c.ratio
        return `${c.color} ${start}% ${currentPos}%`
    }).join(', ')

    // maskのためのスタイルオブジェクト
    const maskStyle = {
        background: `linear-gradient(${angle}deg, ${stops})`, // 背景はグラデーション
        WebkitMaskImage: `url(${selectedLayout})`, // マスク画像として、選択されたアイコン指定
        maskImage: `url(${selectedLayout})`, 
        WebkitMaskRepeat: 'no-repeat', // イメージを繰り返さない
        WebkitMaskPosition: 'center', // 中央に寄せる
        WebkitMaskSize: 'contain', // 枠内に収める
        maskSize: 'contain',
    }

    return (
        <div className="flex-1 h-full p-2.5 p-l-7.5 bg-app-bg-color flex items-center justify-center">
            {/* <div
                className="w-full h-full rounded-[40px] shadow-2xl transition-all duration-500 ease-in-out"
                style={maskStyle}
            /> */}
        </div>
    )
}