import type { ColorStop } from "../../../App"
import type { CommonStyles } from "../SettingPanel"
import DeleteButton from "./DeleteButton"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    styles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
}

const nameRegistry = new Map<string, string>()
let nextColorNumber = 1

export default function ColorPersent({colors, setColors, styles, activeSlideIndex, slideItem}: Props) {

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
        <>
            {colors.map((c, i) =>{

                // 名簿の処理
                if (!nameRegistry.has(c.id)) {
                    nameRegistry.set(c.id, `色 ${nextColorNumber++}`)
                }

                const displayName = nameRegistry.get(c.id)!

                return (
                    <div
                        className="relative flex flex-col gap-3"
                        key={c.id}
                    >
                        <DeleteButton
                        colors={colors}
                        setColors={setColors}
                        slideItem={slideItem}
                        index={i}
                        />

                        <div
                            className={`${styles.card} ${activeSlideIndex === i ? "-translate-x-10" : "-translate-x-0"}`}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                slideItem(i)
                            }}
                        >
                            
                            <div className={styles.clip}/>
                            <span className="text-sm text-text-color font-mono">{displayName}</span>
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
                    </div>
                )
            })}
        </>
    )
}