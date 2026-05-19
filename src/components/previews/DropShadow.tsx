import type { DropShadowConfig } from "../../App"


type Props = {
    dropShadowParam: DropShadowConfig
    previewBg: string
}

export default function DropShadow({dropShadowParam, previewBg}: Props) {
    

    return (
        <div
            className={`${previewBg} flex justify-center items-center`}
        >

            <div
                style={{
                    width: `${dropShadowParam.size}%`,
                    borderRadius: `${dropShadowParam.roundedRect}px`,
                    aspectRatio: `${dropShadowParam.xAspect} / ${dropShadowParam.yAspect}`,
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