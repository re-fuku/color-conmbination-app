import type { ColorStop } from "../../App";

type Props = {
    angle: number;
    setAngle: (v: number) => void;
    colors: ColorStop[];
    setColors: (c: ColorStop[]) => void;
};

export default function SettingPanel({ angle, setAngle, colors, setColors}: Props) {
    // 共通のスタイルを定義
    const cardStyle = " bg-item-bg-color p-3 rounded-xl flex justify-between items-center"
    const labelStyle = "text-sm text-text-color"
    const inputStyle = "bt-transparent bg-input-bg-color text-right w-10 outline-none font-mono rounded-lg"

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
        <div className="h-1/2 gap-3 flex flex-col rounded-3x">
            {/* 角度入力部分 */}
            <div className={cardStyle}>
                <span className={labelStyle}>角度</span>
                <div className="flex items-center">
                    <input
                        type="number"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                        className={inputStyle}
                    />
                    <span className="text-xs text-text-color font-mono">deg</span>
                </div>
            </div>

            {/* 色リスト部分 */}
            <div className="flex flex-col gap-3">
                {colors.map((c, i) =>(
                    <div key={c.id} className={cardStyle}>
                        <span className="text-sm text-text-color font-mono">色{i + 1}</span>
                        <div className="flex items-center gap-1">
                            <input 
                                className={inputStyle}
                                value={c.ratio}
                                onChange={(e) => handleRatioChange(c.id, Number(e.target.value)) }
                            />
                            <span className="text-xs align-bottom">%</span>
                            <div 
                                className="w-6 h-6 rounded-full border-white border-2"
                                style={{ backgroundColor: c.color }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* [+]ボタン */}
            <button className="w-full bg-transparent font-text-color flex justify-center justify-items-center">
                <span className="bg-blue-500 w-10 h-10 rounded-full text-3xl font-bold flex justify-items-center justify-center">+</span>
            </button>
        </div>
    )
}