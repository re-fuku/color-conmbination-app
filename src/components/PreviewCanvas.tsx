import type { ColorStop } from '../App'

type Props = {
    angle: number
    colors: ColorStop[]
}

export default function PreviewCanvas({ angle, colors }:Props){
    // グラデーションの境界部分の作成
    let currentPos = 0
    const gradientString = colors.map(c => {
        const start = currentPos
        currentPos += c.ratio
        return `${c.color} ${start} ${currentPos}`
    }).join(', ')

    const bakcgroundStyle = {
        background: `linear-gradient(${angle}deg, ${gradientString})`
    }

    return (
        <div className="flex-1 h-full p-10 bg-app-bg-color flex items-center justify-center">
            <div
                className="w-full h-full rounded-[40px] shadow-2xl transition-all duration-500 ease-in-out"
                style={bakcgroundStyle}
            />
        </div>
    )
}