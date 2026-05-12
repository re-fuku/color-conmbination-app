import * as Popover from "@radix-ui/react-popover"
import { HexColorPicker } from "react-colorful"
import type { CommonStyles } from "../SettingPanel"
import type { HeaderFooterConfig } from "../../../../App"
import { useState } from "react"


type Props = {
    data: HeaderFooterConfig
    label: string
    setColor: (value: string) => void
    setIsOpenColorPicker: (isOpenColorPicker: boolean) => void
    styles: CommonStyles
}

export default function ChangeColor({data, label, setColor, setIsOpenColorPicker,styles}: Props) {
    const [headerfooterColorCode, setHeaderfooterColorCode] = useState(data.color)

    // 色を変更をテキストで行う場合の処理
    const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const val = e.target.value

        // 入力制御
        if (/^#?[0-9A-Fa-f]{0,6}$/.test(val)) {
            // 先頭に'#'を付ける
            const formatted = val.startsWith('#') ? val : `#${val}`
            
            setHeaderfooterColorCode(formatted)

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
                        style={{ backgroundColor: data.color }}
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
                                value={headerfooterColorCode}
                                onChange={handleTextInput}
                            />   
                        </div>

                        <HexColorPicker
                            color={data.color}
                            onChange={(color) => {
                                setHeaderfooterColorCode(color)
                                setColor(color)
                            }}
                        />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}