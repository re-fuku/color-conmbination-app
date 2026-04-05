import type { ColorStop } from "../../App";

type Props = {
    colors: ColorStop[]
    angle: number
}


export default function LinearBase({colors, angle}: Props) {

    return (
        <>
            <svg 
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full rounded-xl overflow-hidden"
            >
                <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: 'center'}}>

                    {colors.map((item, index) => {
                        // 前回の色の高さを計算
                        const y = colors.slice(0, index).reduce((sum, c) => sum + c.ratio, 0)
                        const height = item.ratio

                        return (
                            <rect
                                key={index}
                                x="0"
                                y={y}
                                width="100"
                                height={height + 0.1}
                                fill={item.color}
                            />
                        )
                    })}
                </g>
            </svg>
        </>
    )
}