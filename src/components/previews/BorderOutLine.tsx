import type { BorderOutlineConfig } from "../../App"


type Props = {
    borderOutlineParam: BorderOutlineConfig
    xAspect: number
    yAspect: number
}

export default function BorderOutLine({borderOutlineParam, xAspect, yAspect}:Props){

    const canvasStyle = {
        background: borderOutlineParam.bgColor
    }

    return(
        <div 
            className="w-full h-full flex justify-center items-center overflow-hidden"
            style={canvasStyle}
        > 

            <div
                style={{
                    width: `${borderOutlineParam.size}%`,
                    height: "auto",
                    borderRadius: `${borderOutlineParam.roundedRect}px`,
                    border: `${borderOutlineParam.borderSize}px solid ${borderOutlineParam.borderColor}`,
                    outline: `${borderOutlineParam.outLineSize}px solid ${borderOutlineParam.outLineColor}`,
                    outlineOffset: `${borderOutlineParam.outLineOffset}px`,
                    aspectRatio: `${xAspect} / ${yAspect}`,
                }}
            />

        </div>
    )
}