import type { ColorStop } from "../../App"

type Props = {
    size: number
    colors: ColorStop[]
}

export default function Circles({size, colors}: Props) {
    return (
        <div
            className="h-full w-full rounded-2xl flex items-center justify-center bg-white"
            style={{
                gap: `${size / 2}%`
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