import type { MaskConfig } from "../../App"

type Props = {
    selectedLayout: string
    maskParam: MaskConfig
}


export default function TextBlock({selectedLayout, maskParam}: Props) {
    const bgStyle = `bg-[${maskParam.bgColor}]`
    const textStyle = `text-[${maskParam.textColor}]`

    return (
        <div>
        </div>
    )
}