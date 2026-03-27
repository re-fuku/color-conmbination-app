import { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful"
import type { ColorStop } from "../../../App";
import type { CommonStyles } from "../SettingPanel";

type Props = {
    styles: CommonStyles
    colors: ColorStop[]
    color: ColorStop
    setColors: (c:ColorStop[]) => void
}

export default function ColorChangeButton({styles, colors, color, setColors}: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const [inputColorCode, setInputColorCode] = useState(color.color)
    const popover = useRef<HTMLDivElement>(null)

    // 色を変更をテキストで行う場合の処理
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const val = e.target.value

        // 入力制御
        if (/^#?[0-9A-Fa-f]{0,6}$/.test(val)) {
            // 先頭に'#'を付ける
            const formatted = val.startsWith('#') ? val : `#${val}`
            
            setInputColorCode(formatted)

            // 有効桁数になったら反映
            if (formatted.length === 4 || formatted.length == 7) {
                handleColorChange(formatted)
            }
        }
    }

    // 色を変更する処理
    const handleColorChange = (newColor: string) => {
        const newColors = colors.map((c) => {
            if (c.id === color.id) {
                return {...c, color: newColor}
            }
            return c
        })

        setInputColorCode(newColor)
        setColors(newColors)
    }

    // ピッカーの外側をクリックしたら閉じる処理
    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (isOpen && !popover.current?.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", close)
        return () => document.removeEventListener("mousedown", close)
    },[isOpen])

    return (
        <div className="relative cursor-pointer">
            <button
                className="w-6 h-6 rounded-full border-white border-2"
                style={{ backgroundColor: color.color }}
                onClick={() => setIsOpen(!isOpen)}
            />

            {/* カラーピッカー部分 */}
            {isOpen && (
                <div
                    ref={popover}
                    className="absolute top-[-50px] left-15 bg-item-bg-color p-t-3"
                >
                    <span className={styles.label}>色コード: </span>
                    <input
                        className={`${styles.input} w-18`}
                        type="text"
                        value={inputColorCode}
                        onChange={handleTextInput}
                    />   
                    <HexColorPicker
                    color={color.color}
                    onChange={handleColorChange}
                    />
                </div>
            )}
        </div>
    )
}