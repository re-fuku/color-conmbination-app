import { useState } from "react";

import type { ColorStop } from "../../App";

// 各アイテムリスト
import InputAngle from "./listitems/InputAngle";
import ColorPersent from "./listitems/ColorPersent";
import AddItemButton from "./listitems/AddItemButton";
import SingleNumberInput from './listitems/SingleNumberInput'

type Props = {
    angle: number;
    setAngle: (v: number) => void;
    colors: ColorStop[];
    setColors: (c: ColorStop[]) => void;
    selectedLayout: string
};

export type CommonStyles = {
  card: string
  label: string
  input: string
  unit: string
  clip: string
}

export default function SettingPanel({ angle, setAngle, colors, setColors, selectedLayout}: Props) {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null)

    // 共通のスタイルを定義
    const commonStyles = {
        card: " bg-item-bg-color p-3 rounded-xl relative flex justify-between items-center overflow-hidden transition-transform duration-300 ease-in-out",
        label: "text-sm text-text-color",
        input: "bt-transparent bg-input-bg-color text-right w-10 outline-none font-mono rounded-lg",
        unit: "text-xs text-text-color font-mono",
        clip: "absolute -top-0 -left-0 h-5 w-5 bg-clip-color rounded-tl-sm [clip-path:polygon(0%_0%,100%_0%,0%_100%)]",
    }

    // アイテムをスライドをする処理
    const slideItem = (index: number) => {
        setActiveSlideIndex(activeSlideIndex === index ? null : index)
    }

    // アイテムリストを生成する
    const renderItemList = () => {
        
        switch (true) {
            // ➀線形色表示
            case selectedLayout.includes('linear-base'):
                return (
                    <>
                        <InputAngle
                            angle={angle}
                            setAngle={setAngle}
                            styles={commonStyles}
                        />

                        <ColorPersent
                            colors={colors}
                            setColors={setColors}
                            styles={commonStyles}
                            activeSlideIndex={activeSlideIndex}
                            slideItem={slideItem}
                        />

                        <AddItemButton
                            colors={colors}
                            setColors={setColors}
                            styles={commonStyles}
                        />
                    </>
                )
            // ➁線形グラデーション
            case selectedLayout.includes(''):
                return ''
            // ➂放射グラデーション
            case selectedLayout.includes(''):
                return ''
            // ➃扇形グラデーション
            case selectedLayout.includes(''):
                return ''
            // ➄円並び
            case selectedLayout.includes(''):
                return ''
            // ➅角丸四角形並び
            case selectedLayout.includes(''):
                return ''
        }
    }

    return (
        <div className="h-1/2 gap-3 flex flex-col rounded-3x">
            {renderItemList()}
        </div>
    )
}