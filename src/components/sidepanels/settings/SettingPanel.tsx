import { useState } from "react";

import type { ColorStop } from "../../../App";

// 各アイテムリスト
import LinearBaseSetting from "./LinearBaseSetting"


type Props = {
    angle: number;
    setAngle: (v: number) => void;
    wSize: number;
    setWSize: (wSize: number) => void;
    hSize: number;
    setHSize: (hSize: number) => void;
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

export default function SettingPanel(props : Props) {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null)

    // 共通のスタイルを定義
    const commonStyles = {
        card: "bg-item-bg-color p-3 rounded-xl relative flex justify-between items-center transition-transform duration-300 ease-in-out",
        label: "text-sm text-text-color cursor-default",
        input: "bt-transparent bg-input-bg-color text-right w-10 outline-none font-mono rounded-lg text-text-color",
        unit: "text-xs text-text-color font-mono",
        clip: "absolute -top-0 -left-0 h-5 w-5 bg-clip-color rounded-tl-xl [clip-path:polygon(0%_0%,100%_0%,0%_100%)]",
    }

    // アイテムをスライドをする処理
    const slideItem = (index: number) => {
        setActiveSlideIndex(activeSlideIndex === index ? null : index)
    }

    // アイテムリストを生成する
    const renderItemList = () => {
        console.log(props.selectedLayout)
        switch (true) {
            // ➀線形色表示
            case props.selectedLayout.includes('linear-base'):
                return (
                    <LinearBaseSetting
                        {...props}
                        activeSlideIndex={activeSlideIndex}
                        slideItem={slideItem}
                        commonStyles={commonStyles}
                    />
                )
            // ➁線形グラデーション
            case props.selectedLayout.includes(''):
                return ''
            // ➂放射グラデーション
            case props.selectedLayout.includes(''):
                return ''
            // ➃扇形グラデーション
            case props.selectedLayout.includes(''):
                return ''
            // ➄円並び
            case props.selectedLayout.includes('circles'):
                return (
                    <CirclesSetting
                        {...props}
                        activeSlideIndex={activeSlideIndex}
                        setAciveSlideIndex={setActiveSlideIndex}
                        slideItem={slideItem}
                        commonStyles={commonStyles}
                    />
                )
            // ➅角丸四角形並び
            case props.selectedLayout.includes(''):
                return ''
        }
    }

    return (
        <div className="h-1/2 gap-3 flex flex-col rounded-3x">
            {renderItemList()}
        </div>
    )
}