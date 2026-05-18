import * as Popover from "@radix-ui/react-popover"
import { HexColorPicker } from "react-colorful"
import type { CommonStyles } from "../SettingPanel"
import type { HeaderFooterConfig, MaskConfig } from "../../../../App"
import { useState } from "react"


type Props = {
    color: string
    label: string
    setColor: (value: string) => void
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
    styles: CommonStyles
}

export default function ChangeColor({color, label, setColor, setIsOpenColorPicker,styles}: Props) {
    const [colorCode, setColorCode] = useState(color)

    // 色を変更をテキストで行う場合の処理
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const val = e.target.value

        // 入力制御
        if (/^#?[0-9A-Fa-f]{0,6}$/.test(val)) {
            // 先頭に'#'を付ける
            const formatted = val.startsWith('#') ? val : `#${val}`
            
            setColorCode(formatted)

            // 有効桁数になったら反映
            if (formatted.length === 4 || formatted.length == 7) {
                setColor(formatted)
            }
        }
    }

    return (
        <div
            className={styles.card}
        >
            <span className={styles.label}>{label}</span>
            <Popover.Root
                onOpenChange={(open) => {
                    setIsOpenColorPicker(open)
                }}
            >
                <Popover.Trigger asChild>
                    <button
                        className="w-6 h-6 mr-2 rounded-full border-white border-2 cursor-pointer"
                        style={{ backgroundColor: color }}
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
                            <span className={styles.label}>{label}_コード: </span>
                            <input
                                className={`${styles.input} w-20`}
                                type="text"
                                value={colorCode}
                                onChange={handleTextInput}
                            />   
                        </div>

                        <HexColorPicker
                            color={colorCode}
                            onChange={(c) => {
                                setColorCode(c)
                                setColor(c)
                            }}
                        />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}