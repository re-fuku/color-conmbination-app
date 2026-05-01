import type { ColorStop } from "../../App"

type Props = {
    wSize: number
    borderSize: number
    xAspect: number
    yAspect: number
    colors: ColorStop[]
    previewBG: string
}

export default function RoundedRect({wSize, borderSize, xAspect, yAspect, colors, previewBG}: Props) {

    return (
        <div
            className={`${previewBG} justify-evenly`}
            style={{
                gap: `${wSize / 3}%`
            }} 
        >
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: `${wSize}%`,
                        borderRadius: `${borderSize}px`,
                        aspectRatio: `${xAspect} / ${yAspect}`,
                        backgroundColor: color.color
                    }}
                />
            ))}
        </div>
    )
}