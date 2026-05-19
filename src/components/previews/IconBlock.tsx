import type { IconBlockConfig } from "../../App"
import { MessageCircle } from "lucide-react"

type Props = {
    iconBlockParam: IconBlockConfig
    previewBg: string
}


export default function IconBlock({iconBlockParam, previewBg}: Props) {
    const iconSize = "w-[60%] h-[60%]"
    const iconAroundSize = "w-[30%] h-auto aspect-square rounded-full flex justify-center items-center"

    return (
        <div className={`${previewBg} flex justify-center items-center gap-8`}
            style={{backgroundColor: iconBlockParam.bgColor}}
        >
            <div 
                className={iconAroundSize}
                style={{backgroundColor: iconBlockParam.iconColor}}
            >
                <MessageCircle
                    className={iconSize}
                    style={{
                        color: iconBlockParam.bgColor,
                        fill: iconBlockParam.bgColor,
                    }}
                />   
            </div>
            
            <div className={iconAroundSize}>
                <MessageCircle
                    className={`${iconSize}`}
                    style={{
                        color: iconBlockParam.iconColor,
                        fill: iconBlockParam.iconColor
                    }}
                />
            </div>

        </div>
    )
}