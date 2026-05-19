import type { TextBlockConfig } from "../../App"

type Props = {
    textBlockParam: TextBlockConfig
    previewBg: string
}


export default function TextBlock({textBlockParam, previewBg}: Props) {
    const text = 'text'

    return (
        <div className={`${previewBg} flex justify-center items-center gap-8`}
            style={{backgroundColor: textBlockParam.bgColor}}
        >
            <div 
                className="w-[30%] h-[20%] text-9xl flex justify-center items-center"
                style={{
                    backgroundColor: textBlockParam.textColor,
                    color: textBlockParam.bgColor,
                }}    
            >
                {text}
            </div>

            <div
                className={`text-9xl`}
                style={{color: textBlockParam.textColor}}>{text}</div>
        </div>
    )
}