type Props = {
    angle: number;
    setAngle: (val: number) => void
    styles: {
        card: string
        label: string
        input: string
        unit: string
    }
}

// 単一数値設定
export default function InputAngle({angle, setAngle, styles}: Props) {
    return (
        <div className={styles.card}>
            <span className={styles.label}>角度</span>
            <div className="flex items-center">
                <input
                    type="number"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className={styles.input}
                />
                <span className={styles.unit}>deg</span>
            </div>
        </div>
    )
}