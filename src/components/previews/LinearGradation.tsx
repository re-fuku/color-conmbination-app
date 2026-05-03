import type { ColorStop } from "../../App"

type Props = {
    colors: ColorStop[]
    angle: number
    previewBG: string
}

export default function LinearGradation({ colors, angle, previewBG }: Props) {
    const gradientStr = colors.map((color) => {
        const mid = (color.start + color.end) / 2

        return `${color.color} ${mid}%`
    }).join(',')

    return (
        <div
            className={previewBG}
            style={{
                background: `linear-gradient(${angle + 180}deg, ${gradientStr})`
            }}
        />
    )
}