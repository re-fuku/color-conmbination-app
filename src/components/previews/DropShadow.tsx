import type { DropShadowConfig } from "../../App"


type Props = {
    dropShadowParam: DropShadowConfig
    xAspect: number
    yAspect: number
    previewBg: string
}

export default function DropShadow({dropShadowParam, xAspect, yAspect, previewBg}: Props) {
    

    return (
        <div
            className={`${previewBg} flex justify-center items-center`}
        >

            <div
                style={{
                    width: `${dropShadowParam.size}%`,
                    borderRadius: `${dropShadowParam.roundedRect}px`,
                    aspectRatio: `${xAspect} / ${yAspect}`,
                    backgroundColor: dropShadowParam.bgColor,
                    boxShadow: `${dropShadowParam.mode}
                                ${dropShadowParam.xShadowPosition}px
                                ${dropShadowParam.yShadowPosition}px
                                ${dropShadowParam.shadowBlur}px
                                ${dropShadowParam.shadowSize}px
                                ${dropShadowParam.shadowColor}
                                `
                }}
            />

        </div>
    )
}