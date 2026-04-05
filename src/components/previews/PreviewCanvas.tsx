import type { ColorStop } from '../../App'
import LinearBase from './LinearBase'

type Props = {
    selectedLayout: string
    colors: ColorStop[]
    angle: number
}

export default function PreviewCanvas({ selectedLayout, colors, angle }: Props) {

    const renderPreview = () => {

        switch (true) {
            case selectedLayout.includes('linear-base'):
                return (
                    <LinearBase
                        colors={colors}
                        angle={angle}
                    />
                )
            default:
                break
        }
    }      

    return (
        <div className="w-full pl-7.5 p-2.5">
            {renderPreview()}
        </div>
    )
}