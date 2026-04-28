import type { ColorStop } from "../../App"

type Props = {
    size: number
    colors: ColorStop[]
    previewBG: string
}

export default function Circles({size, colors, previewBG}: Props) {
    return (
        <div
            className={`${previewBG} justify-evenly`}
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