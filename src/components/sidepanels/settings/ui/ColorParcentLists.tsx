import type { ColorConfig } from "../../../../App"
import type { CommonStyles } from "../SettingPanel"
import DeleteButton from "./DeleteButton"
import ColorChangeButton from "./ColorChangeButton"

type Props = {
    colors: ColorConfig[]
    setColors: (c:ColorConfig[]) => void
    styles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
    parcent: false | true 
}

export default function ColorPercentLists({colors, setColors, styles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker, parcent}: Props) {
    // 最小値と最大値
    const min = 0
    const max = 100

    // ratioを変更した際の処理
    const handleRatioChange = (id: string, ratio: number) => {
        let newRatio

        if (ratio < min) {
            newRatio = min
        } else if (max < ratio) {
            newRatio = max
        } else {
            newRatio = ratio
        }

        const newColors = colors.map((c) => {
            if (c.id == id) {
                // IDが一致する要素のratioを書き換えて返す
                return { ...c, ratio: newRatio}
            }
            // それ以外の要素はそのまま返す
            return c
        })
        // 新しい配列で状態を更新
        setColors(newColors)
    }

    console.log(colors[0].ratio)
    
    return (
        <>
            {colors.map((c, i) =>{
                const displayName = "色 " + (i + 1)

                return (
                    <div
                        className="relative flex flex-col gap-3"
                        key={c.id}
                    >
                        {/* 削除ボタン裏に隠れている */}
                        <DeleteButton
                            colors={colors}
                            setColors={setColors}
                            slideItem={slideItem}
                            activeSlideIndex={activeSlideIndex}
                            index={i}
                        />

                        <div
                            className={`${styles.card} ${activeSlideIndex === i ? "-translate-x-10" : ""}`}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                if(!isOpenColorPicker) {
                                    slideItem(i)
                                }
                            }}
                        >
                            
                            <div className={styles.clip}/>
                            <span className={styles.label}>{displayName}</span>
                            <div className="flex items-center gap-1">
                                {parcent && 
                                    <div className="relative">
                                        <input 
                                            className={styles.input}
                                            type='number'
                                            value={c.ratio}
                                            onChange={(e) => handleRatioChange(c.id, Number(e.target.value)) }
                                        />
                                        <span className={styles.unit}>%</span>
                                    </div>
                                }
                                <ColorChangeButton
                                    displayName={displayName}
                                    styles={styles}
                                    colors={colors}
                                    color={c}
                                    setColors={setColors}
                                    setIsOpenColorPicker={setIsOpenColorPicker}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}