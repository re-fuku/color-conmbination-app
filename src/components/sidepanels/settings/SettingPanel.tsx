import { useState } from "react";

import type { SidePanelProps } from "../../../App";

// 各アイテムリスト
import LinearBaseSetting from "./LinearBaseSetting"
import CirclesSetting from "./CirclesSetting";
import RoundedRectSetting from "./RoudedRectSetting";
import PoligonSetting from "./PoligonSetting";
import LinearGradiationSetting from "./LinearGradiationSetting";

export type CommonStyles = {
  card: string
  label: string
  input: string
  unit: string
  clip: string
}

// 子コンポーネントに渡す追加のpropsの型
export type AddProps = {
    activeSlideIndex: number | null
    slideItem: (index: number) => void
    commonStyles: CommonStyles
}

export default function SettingPanel(props : SidePanelProps) {
    const [activeSlideIndex, setActiveSlideIndex] = useState<number | null>(null)
    const selectedLayout = props.selectedLayout

    // 共通のスタイルを定義
    const commonStyles = {
        card: "w-full h-10 bg-item-bg-color p-3 px-2 rounded-xl relative flex justify-between items-center transition-transform duration-300 ease-in-out",
        label: "text-sm text-text-color cursor-default",
        input: "bt-transparent bg-input-bg-color text-center w-12 h-7.5 px-2 outline-none font-mono rounded-lg text-text-color [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
        unit: "absolute -bottom-0 -right-0 text-[10px] text-text-color font-mono",
        clip: "absolute -top-0 -left-0 h-5 w-5 bg-clip-color rounded-tl-xl [clip-path:polygon(0%_0%,100%_0%,0%_100%)]",
    }

    // アイテムを横にスライドをする処理
    const slideItem = (index: number) => {
        setActiveSlideIndex(activeSlideIndex === index ? null : index)
    }

    // 追加のpropsをまとめておく
    const addProps = {
        activeSlideIndex: activeSlideIndex,
        slideItem: slideItem,
        commonStyles: commonStyles,
    }

    // アイテムリストを生成する
    const renderItemList = () => {
        switch (true) {
            // ➀線形色表示
            case selectedLayout.includes('linear-base'):
                return (
                    <LinearBaseSetting
                        {...props}
                        {...addProps}
                    />
                )
            // ➁線形グラデーション
            case selectedLayout.includes('linear-gradation'):
                return (
                    <LinearGradiationSetting
                        {...props}
                        {...addProps}
                    />
                )
            // ➂放射グラデーション
            case selectedLayout.includes('radial-gradation'):
                return ''
            // ➃扇形グラデーション
            case selectedLayout.includes('conic-gradation'):
                return ''
            // ➄円並び
            case selectedLayout.includes('circles'):
                return (
                    <CirclesSetting
                        {...props}
                        {...addProps}
                    />
                )
            // ➅角丸四角形並び
            case selectedLayout.includes('rounded-rect'):
                return (
                    <RoundedRectSetting
                        {...props}
                        {...addProps}
                    />
                )
            // ➆多角形並び
            case selectedLayout.includes('poligon-tiles'):
                return (
                    <PoligonSetting
                        {...props}
                        {...addProps}
                    />
                )
        }
    }

    return (
        <div className="h-1/2 flex flex-col rounded-3x">
            <div className="flex flex-col p-2.5 gap-2.5">
                {renderItemList()}
            </div>
        </div>
    )
}