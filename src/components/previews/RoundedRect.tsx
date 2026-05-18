import type { ColorConfig } from "../../App"

type Props = {
    wSize: number
    roundedRect: number
    xAspect: number
    yAspect: number
    colors: ColorConfig[]
    previewBG: string
}

export default function RoundedRect({wSize, roundedRect, xAspect, yAspect, colors, previewBG}: Props) {

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
                        borderRadius: `${roundedRect}px`,
                        aspectRatio: `${xAspect} / ${yAspect}`,
                        backgroundColor: color.color
                    }}
                />
            ))}
        </div>
    )
}