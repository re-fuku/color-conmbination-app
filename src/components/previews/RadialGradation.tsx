import type { ColorConfig } from "../../App"

type Props = {
    colors: ColorConfig[]
    xPosition: number
    yPosition: number
    gradientStr: (colors: ColorConfig[]) => string
    previewBG: string
}

export default function RadialGradation({colors, xPosition, yPosition, gradientStr, previewBG}: Props) {

    return (
        <div
            className={previewBG}
            style={{
                background: `radial-gradient(circle at ${xPosition}% ${yPosition}%, ${gradientStr(colors)})`
            }}
        />
    )
}