type Props = {
    value: number;
    unit: string;
    onChange: (val: number) => void
    cardClass: string
    inputClass: string
    labelClass: string
}

// 単一数値設定
export default function SingleNumberInput({value, onChange, cardClass, inputClass}: Props) {
    return (
        <div className={cardClass}>
            <span className={""}>角丸サイズ</span>
            <input className={inputClass} value={value}></input>
        </div>
    )
}