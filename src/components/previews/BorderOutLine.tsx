import type { BorderOutlineConfig } from "../../App"


type Props = {
    brolParam: BorderOutlineConfig
    xAspect: number
    yAspect: number
}

export default function BorderOutLine({brolParam, xAspect, yAspect}:Props){

    const canvasStyle = {
        background: brolParam.bgColor
    }

    return(
        <div 
            className="w-full h-full flex justify-center items-center"
            style={canvasStyle}
        > 

            <div
                style={{
                    width: `${brolParam.size}%`,
                    borderRadius: `${brolParam.roundedRect}px`,
                    border: `${brolParam.borderSize}px solid ${brolParam.borderColor}`,
                    outline: `${brolParam.outLineSize}px solid ${brolParam.outLineColor}`,
                    outlineOffset: `${brolParam.outLineOffset}px`,
                    aspectRatio: `${xAspect} / ${yAspect}`,
                }}
            />

        </div>
    )
}