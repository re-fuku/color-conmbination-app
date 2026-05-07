
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
                    src="src\assets\menus\callSettingButton.svg"
                    className={menuIconStyle}
                    onClick={() => alert('設定呼び出しボタンがクリックされました')}
                />
            </button>
            
            {/* 背景色変更ボタン */}
            <button>
                <img
                    src="src\assets\menus\changeBgButton.svg"
                    className={menuIconStyle}
                    onClick={() => alert('背景色変更ボタンがクリックされました')}
                />
            </button>

            {/* 設定保存ボタン */}
            <button>
                <img
                    src="src\assets\menus\saveSettingButton.svg"
                    className={menuIconStyle}
                    onClick={() => alert('設定保存ボタンがクリックされました')}
                />
            </button>

        </nav>
    )
}