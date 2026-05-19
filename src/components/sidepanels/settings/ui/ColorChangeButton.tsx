import { useState } from "react";
import { HexColorPicker } from "react-colorful"
import * as Popover from '@radix-ui/react-popover'
import type { ColorConfig } from "../../../../App";
import type { CommonStyles } from "../SettingPanel";

type Props = {
    displayName: string | undefined
    styles: CommonStyles
    colors: ColorConfig[]
    color: ColorConfig
    setColors: (c:string) => void
    setIsOpenColorPicker: (isOpenColorPikcer: boolean) => void
}

export default function ColorChangeButton({displayName, styles, color, setColors, setIsOpenColorPicker}: Props) {
    const [inputColorCode, setInputColorCode] = useState(color.color)

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
        setInputColorCode(newColor)
        setColors(newColor)
    }

    return (
        <Popover.Root
            onOpenChange={(open) => {
                setIsOpenColorPicker(open)
            }}
        >
            <Popover.Trigger asChild>
                <button
                    className="w-6 h-6 rounded-full border-white border-2 cursor-pointer"
                    style={{ backgroundColor: color.color }}
                />
            </Popover.Trigger>

            {/* カラーピッカー部分 */}
            <Popover.Portal>
                <Popover.Content
                    side="right"
                    sideOffset={20}
                    align="start"
                    alignOffset={-50}
                    className="bg-item-bg-color rounded-2xl"
                    onInteractOutside={(e : any) => {
                    if (e.detail.originalEvent instanceof MouseEvent && e.detail.originalEvent.button === 2) {
                            e.preventDefault()
                        }
                    }}
                >
                    <div className="flex justify-start items-center p-1 gap-1">
                        <span className={styles.label}>{displayName}_コード: </span>
                        <input
                            className={`${styles.input} w-20`}
                            type="text"
                            value={inputColorCode}
                            onChange={handleTextInput}
                        />   
                    </div>

                    <HexColorPicker
                        color={color.color}
                        onChange={handleColorChange}
                    />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}