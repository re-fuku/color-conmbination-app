import type { MaskConfig } from "../../App"

type Props = {
    selectedLayout: string
    maskParam: MaskConfig
}

export default function MaskPreview({selectedLayout, maskParam}: Props) {

    return (
        <div
            className="w-full h-full rounded-2xl bg-white"
        />
    )
}