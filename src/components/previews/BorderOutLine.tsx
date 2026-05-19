import type { BorderOutlineConfig } from "../../App"


type Props = {
    borderOutlineParam: BorderOutlineConfig
}

export default function BorderOutLine({borderOutlineParam}:Props){

    const canvasStyle = {
        background: borderOutlineParam.bgColor
    }

    return(
        <div 
            className="h-full w-full rounded-2xl flex justify-center items-center"
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
                    aspectRatio: `${borderOutlineParam.xAspect} / ${borderOutlineParam.yAspect}`,
                }}
            />

        </div>
    )
}