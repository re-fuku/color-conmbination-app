import type { CommonStyles } from "../SettingPanel"

type Props = {
    label: string
    unit: string
    data: Record<string, any>
    setData: (data: any) => void
    objKey: string
    max: number
    min: number
    styles: CommonStyles
}


// 単一数値設定
export default function SingleValue({label, unit, data, setData, objKey, max, min, styles}: Props) {

    const updateObj = (value: number) => {
        let newValue
        
        if(value < min) {
            newValue = min
        } else if (max < value) {
            newValue = max
        } else {
            newValue = value
        }

        const newObj = {...data, [objKey]: newValue}
        setData(newObj)
    }

    return (
        <div className={styles.card}>
            <span className={styles.label}>{label}</span>
            <div className="relative">
                <input
                    type="number"
                    inputMode="numeric"
                    value={data[objKey]}
                    onChange={(e) => updateObj(Number(e.target.value))}
                    className={styles.input}
                />
                <span className={styles.unit}>{unit}</span>
            </div>
        </div>
    )
}