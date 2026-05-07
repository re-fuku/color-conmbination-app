import type { ColorStop } from "../../App"

type Props = {
    colors: ColorStop[]
    xPosition: number
    yPosition: number
    gradientStr: (colors: ColorStop[]) => string
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