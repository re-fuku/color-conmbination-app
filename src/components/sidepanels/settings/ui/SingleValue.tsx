import type { CommonStyles } from "../SettingPanel"

type Props = {
    label: string
    value: number;
    setValue: (value: number) => void
    styles: CommonStyles
}


// 単一数値設定
export default function SingleValue({label, value, setValue, styles}: Props) {
    // labelに応じた単位
    const unit: Record<string, string> = {
        '角度': 'deg',
        'サイズ': '%',
        '角丸サイズ': 'px',
    }

    const displayUnit = unit[label] || '単位未設定'

    return (
        <div className={styles.card}>
            <span className={styles.label}>{label}</span>
            <div className="flex items-center">
                <input
                    type="number"
                    inputMode="numeric"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className={styles.input}
                />
                <span className={styles.unit}>{displayUnit}</span>
            </div>
        </div>
    )
}