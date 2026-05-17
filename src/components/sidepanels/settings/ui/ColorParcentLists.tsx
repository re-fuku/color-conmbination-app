import type { ColorConfig } from "../../../../App"
import type { CommonStyles } from "../SettingPanel"
import DeleteButton from "./DeleteButton"
import ColorChangeButton from "./ColorChangeButton"

type Props = {
    data: any
    setData: (data: any) => void
    styles: CommonStyles
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    isOpenColorPicker: boolean
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
    parcent: false | true 
}

export default function ColorPercentLists({data, setData, styles, activeSlideIndex, slideItem, isOpenColorPicker, setIsOpenColorPicker, parcent}: Props) {
    // 最小値と最大値
    const min = 0
    const max = 100

    // color内を変更する際の処理
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
            {data.colors.map((c: ColorConfig, i: number) =>{
                const displayName = "色 " + (i + 1)

                return (
                    <div
                        className="relative flex flex-col gap-3"
                        key={c.id}
                    >
                        {/* 削除ボタン裏に隠れている */}
                        <DeleteButton
                            colors={data.colors}
                            setColors={(colors) => deleteColor(colors)}
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
                                            onChange={(e) => changeColorValue(c.id, 'ratio', Number(e.target.value)) }
                                        />
                                        <span className={styles.unit}>%</span>
                                    </div>
                                }
                                <ColorChangeButton
                                    displayName={displayName}
                                    styles={styles}
                                    colors={data.colors}
                                    color={c}
                                    setColors={(value) => changeColorValue(c.id,'color', value)}
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