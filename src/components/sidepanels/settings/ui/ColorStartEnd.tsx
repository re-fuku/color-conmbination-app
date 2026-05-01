import type { ColorStop } from '../../../../App'
import type { CommonStyles } from '../SettingPanel'
import { ItemNameRegister } from "../../../../hooks/useItemNameRegister"
import ColorChangeButton from './ColorChangeButton'
import DeleteButton from './DeleteButton'


type Props = {
    colors: ColorStop[]
    setColors: (colors: ColorStop[]) => void
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    styles: CommonStyles
}

export default function ColorStartEnd({colors, setColors, styles, activeSlideIndex, slideItem}: Props) {
    const { getDisplayName } = ItemNameRegister("色")


    const handleChangeRatio = (id: string, target: string, newRatio: number) => {
        const updatedColors = colors.map((c) => {
            if (c.id == id) {
                // IDが一致する要素のratioを書き換えて返す
                return { ...c, [target]: newRatio}
            }
            // それ以外の要素はそのまま返す
            return c
        })

        // 新しい配列で状態を更新
        setColors(updatedColors)
    }

    return (
        <>
            {colors.map((color, index) => {
                const displayName = getDisplayName(color.id)
                return (
                    <div
                        key={index}
                        className="relative flex flex-col gap-3"
                    >
                        {/* 削除ボタン裏に隠れている */}
                        <DeleteButton
                            colors={colors}
                            setColors={setColors}
                            slideItem={slideItem}
                            index={index}
                        />

                        <div
                            className={`${styles.card} ${activeSlideIndex === index ? "-translate-x-10" : ""}`}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                slideItem(index)
                            }}
                        >
                            <div className={styles.clip}/>
                            <span className={styles.label}>{displayName}</span>

                            {/* 入力箇所 */}
                            <div className="flex gap-2">
                                {/* start */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={color.start}
                                        onChange={(e) => handleChangeRatio(color.id, "start", Number(e.target.value))}
                                        min={0}
                                        max={100}
                                        className={styles.input}
                                    />
                                    <span className={styles.unit}>%</span>
                                </div>

                                {/* end */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={color.end}
                                        onChange={(e) => handleChangeRatio(color.id, "end", Number(e.target.value))}
                                        min={0}
                                        max={100}
                                        className={styles.input}
                                    />
                                    <span className={styles.unit}>%</span>
                                </div>

                                <ColorChangeButton
                                    displayName={displayName}
                                    styles={styles}
                                    colors={colors}
                                    color={color}
                                    setColors={setColors}
                                />
                            </div>
                        
                        </div>
                    </div>
                )
            })}
        </>
    )
}