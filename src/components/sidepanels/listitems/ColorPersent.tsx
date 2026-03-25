import type { ColorStop } from "../../../App"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    styles: {
        card: string
        label: string
        input: string
        unit: string
    }
}

export default function ColorPersent({colors, setColors, styles}: Props) {

    // ratioを変更した際の処理
    const handleRatioChange = (id: string, newRatio: number) => {
        const updatedColors = colors.map((c) => {
            if (c.id == id) {
                // IDが一致する要素のratioを書き換えて返す
                return { ...c, ratio: newRatio}
            }
            // それ以外の要素はそのまま返す
            return c
        })

        // 新しい配列で状態を更新
        setColors(updatedColors)
    }

    return (
        <div className="flex flex-col gap-3">
            {colors.map((c, i) =>(
                <div key={c.id} className={styles.card}>
                    <span className="text-sm text-text-color font-mono">色{i + 1}</span>
                    <div className="flex items-center gap-1">
                        <input 
                            className={styles.input}
                            value={c.ratio}
                            onChange={(e) => handleRatioChange(c.id, Number(e.target.value)) }
                        />
                        <span className={styles.unit}>%</span>
                        <div 
                            className="w-6 h-6 rounded-full border-white border-2"
                            style={{ backgroundColor: c.color }}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}