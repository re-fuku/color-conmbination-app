import type { ColorConfig } from "../../App"

type Props = {
    colors: ColorConfig[]
    angle: number
    gradientStr: (colors: ColorConfig[]) => string
    previewBG: string
}

export default function ConicGradation({colors, angle, gradientStr, previewBG}: Props) {

    return (
        <div
            className={previewBG}
            style={{
                background: `conic-gradient(from ${angle}deg at center, ${gradientStr(colors)}, ${colors[0].color})`
            }}
        />
    )
}