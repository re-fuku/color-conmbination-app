import type { ColorConfig } from '../../../../App'
import type { CommonStyles } from '../SettingPanel'
import ColorChangeButton from './ColorChangeButton'
import DeleteButton from './DeleteButton'


type Props = {
    data: any
    setData: (data: any) => void
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    styles: CommonStyles
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
}

export default function ColorStartEnd({data, setData, styles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker}: Props) {
    const min = 0
    const max = 100

    const changeColorValue = (id: string, key: string, value: any) => {
        let newValue

        if (value < min) {
            newValue = min
        } else if (max < value) {
            newValue = max
        } else {
            newValue = value
        }

        const newColors = data.colors.map((c: ColorConfig) => {
            if (c.id == id) {
                // IDが一致する要素のratioを書き換えて返す
                return { ...c, [key]: newValue}
            }
            // それ以外の要素はそのまま返す
            return c
        })
        // 新しい配列で状態を更新
        const newObj = {...data, colors: newColors}
        setData(newObj)
    }

    const deleteColor = (newColors: ColorConfig[]) => {
        const newObj = {...data, colors: newColors}

        setData(newObj)
    }

    return (
        <>
            {data.colors.map((c: ColorConfig, index: number) => {
                const displayName = "色 " + (index + 1)
                return (
                    <div
                        key={index}
                        className="relative flex flex-col gap-3"
                    >
                        {/* 削除ボタン裏に隠れている */}
                        <DeleteButton
                            colors={data.colors}
                            setColors={(c) => deleteColor(c)}
                            slideItem={slideItem}
                            activeSlideIndex={activeSlideIndex}
                            index={index}
                        />

                        <div
                            className={`${styles.card} ${activeSlideIndex === index ? "-translate-x-10" : ""}`}
                            onContextMenu={(e) => {
                                e.preventDefault()
                                if(!isOpenColorPicker) {
                                    slideItem(index)
                                }
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
                                        value={c.start}
                                        onChange={(e) => changeColorValue(c.id, "start", Number(e.target.value))}
                                        className={styles.input}
                                    />
                                    <span className={styles.unit}>%</span>
                                </div>

                                {/* end */}
                                <div className="relative">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        value={c.end}
                                        onChange={(e) => changeColorValue(c.id, "end", Number(e.target.value))}
                                        className={styles.input}
                                    />
                                    <span className={styles.unit}>%</span>
                                </div>

                                <ColorChangeButton
                                    displayName={displayName}
                                    styles={styles}
                                    colors={data.colors}
                                    color={c}
                                    setColors={(value) => changeColorValue(c.id, 'color', value)}
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