import type { ColorStop } from "../../App"

type Props = {
    size: number
    colors: ColorStop[]
}

export default function Circles({size, colors}: Props) {
    return (
        <div
            className="
                h-full w-full pl-5 pr-5 rounded-2xl 
                flex flex-wrap shrink-0 grow-0 items-center content-center justify-evenly
                 bg-white overflow-hidden
            "
            style={{
                gap: `${size / 3}%`
            }}
        >
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="aspect-square rounded-full"
                    style={{
                        width: `${size}%`,
                        backgroundColor: color.color
                    }}
                />
            ))}
        
        </div>
    )
}