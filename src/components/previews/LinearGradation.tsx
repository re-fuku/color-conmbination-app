import type { ColorConfig } from "../../App"

type Props = {
    colors: ColorConfig[]
    angle: number
    gradientStr: (colors: ColorConfig[]) => string
    previewBG: string
}

export default function LinearGradation({ colors, angle, gradientStr,previewBG }: Props) {

    return (
        <div
            className={previewBG}
            style={{
                background: `linear-gradient(${angle + 180}deg, ${gradientStr(colors)})`
            }}
        />
    )
}