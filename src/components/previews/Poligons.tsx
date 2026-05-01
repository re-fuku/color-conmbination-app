import type { ColorStop } from "../../App"

type Props = {
    gon: number
    size: number
    colors: ColorStop[]
    previewBG: string
}

export default function Poligons({gon, size, colors, previewBG}: Props) {

    const poligonPath = (gon: number, reverse: boolean) => {
        const points = []
        const baseAngle = reverse ? -Math.PI / 2 : Math.PI / 2
        
        // 頂点の角度を計算(-90度からスタートすることで頂点を上に向ける)
        for (let i = 0; i < gon; i++) {
            const angle = (i / gon) * (2 * Math.PI) + baseAngle
            const x = 50 + 50 * Math.cos(angle)
            const y = 50 + 50 * Math.sin(angle)
            points.push(`${x}% ${y}%`)
        }

        return `polygon(${points.join(', ')})`
    }


    return (
        <div
            className={`${previewBG} justify-center`}
            style={{}}
        >
            {colors.map((color, index) => {
                const reverse = index % 2 === 0? true : false
                return (
                    <div
                        key={index}
                        className={`aspect-square flex ${reverse? "self-start":"self-ratio"}`}
                        style={{
                            width: `${size}%`,
                            aspectRatio: 1 / 1,
                            backgroundColor: color.color,
                            clipPath: poligonPath(gon, reverse),
                            transform: reverse? 'translateY(15%)': 'translateY(-15%)',
                            transition: 'clip-path 0.3s ease-in-out',
                            }}
                    />
                )
            })}

        </div>
    )
}