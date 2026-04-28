import type { ColorStop } from "../../App"

type Props = {
    wSize: number
    hSize: number
    xAspect: number
    yAspect: number
    colors: ColorStop[]
}

export default function RoundedRect({wSize, hSize, xAspect, yAspect, colors}: Props) {

    return (
        <div
            className="
                h-full w-full pl-5 pr-5 rounded-2xl 
                flex flex-wrap shrink-0 grow-0 items-center content-center justify-evenly
                 bg-white overflow-hidden
            "
            style={{
                gap: `${wSize / 3}%`
            }} 
        >
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="aspect-square rounded-full"
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