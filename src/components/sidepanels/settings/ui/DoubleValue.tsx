import type { CommonStyles } from "../SettingPanel"

type Props = {
    xValue: number
    setXValue: (xValue: number) => void
    yValue: number
    setYValue: (yValue: number) => void
    styles: CommonStyles
}

export default function DoubleValue({xValue, setXValue, yValue, setYValue, styles}: Props) {

    return (
        <div className={styles.card}>
            <span className={styles.label}>アスペクト比</span>
                
            {/* 入力箇所 */}
            <div className="flex gap-2">
                    {/* X */}
                <div className="relative">
                    <input
                        type="number"
                        inputMode="numeric"
                        value={xValue}
                        onChange={(e) => setXValue(Number(e.target.value))}
                        min={0}
                        max={20}
                        className={styles.input}
                    />
                    <span className={styles.unit}>X</span>
                </div>

                {/* Y */}
                <div className="relative">
                    <input
                        type="number"
                        inputMode="numeric"
                        value={yValue}
                        onChange={(e) => setYValue(Number(e.target.value))}
                        min={0}
                        max={20}
                        className={styles.input}
                    />
                    <span className={styles.unit}>Y</span>
                </div>
            </div>
            
        </div>
    )
}