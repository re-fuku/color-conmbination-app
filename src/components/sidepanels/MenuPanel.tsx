import CallSettingIcon from '@/assets/menus/callSettingButton.svg'
import ChangeBgIcon from '@/assets/menus/changeBgButton.svg'
import SaveSettingIcon from '@/assets/menus/saveSettingButton.svg'

type Props = {
    hoverStyle: string
}

export default function MenuPanel({ hoverStyle }: Props) {

    // メニューアイコンのスタイル
    const menuIconStyle = `w-15 h-15 rounded-full ${hoverStyle}`

    return (
        <nav className="sticky w-70 h-15 p-2.5 rounded-4xl bottom-0 flex gap-12 justify-center items-center bg-cyan-800">
            {/* 設定呼び出しボタン */}
            <button>
                <img
                    src={CallSettingIcon}
                    className={menuIconStyle}
                    onClick={() => alert('設定呼び出しボタンがクリックされました')}
                />
            </button>
            
            {/* 背景色変更ボタン */}
            <button>
                <img
                    src={ChangeBgIcon}
                    className={menuIconStyle}
                    onClick={() => alert('背景色変更ボタンがクリックされました')}
                />
            </button>

            {/* 設定保存ボタン */}
            <button>
                <img
                    src={SaveSettingIcon}
                    className={menuIconStyle}
                    onClick={() => alert('設定保存ボタンがクリックされました')}
                />
            </button>

        </nav>
    )
}