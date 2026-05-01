import type { ColorStop } from "../../App";

type Props = {
    colors: ColorStop[]
    angle: number
}


export default function LinearBase({colors, angle}: Props) {
    const gradientStr = colors.map((color, index) => {
        const start = colors.slice(0, index).reduce((sum, c) => sum + c.ratio, 0)
        const ratio = start + color.ratio
        
        return `${color.color} ${start}%, ${color.color} ${ratio}%`
    }).join(',')

    return (
        <div 
            className="w-full h-full"
            style={{
                // angle 0だと順番が変わるためあらかじめ180度回転させておく
                background: `linear-gradient(${angle + 180}deg, ${gradientStr})`
            }}
        />
    )
}