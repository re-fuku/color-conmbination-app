import type { ColorStop } from "../../App"

type Props = {
    colors: ColorStop[]
    angle: number
    gradientStr: (colors: ColorStop[]) => string
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