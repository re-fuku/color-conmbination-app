import type { ColorStop } from "../../App"

type Props = {
    wSize: number
    hSize: number
    xAspect: number
    yAspect: number
    colors: ColorStop[]
    previewBG: string
}

export default function RoundedRect({wSize, hSize, xAspect, yAspect, colors, previewBG}: Props) {

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
                    className="rounded-full"
                    style={{
                        width: `${wSize}%`,
                        height: `${hSize}px`,
                        aspectRatio: `${xAspect} / ${yAspect}`,
                        backgroundColor: color.color
                    }}
                />
            ))}
        </div>
    )
}