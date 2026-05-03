
type Props = {
    hoverStyle: string
}

const menuImages = import.meta.glob<{ default: string }>(
    '../../assets/menus/*svg',
    { eager: true}
)

export default function MenuPanel({ hoverStyle }: Props) {

    // ファイル名から特定のアイコンを取り出す関数
    const getMenuIcon = (name: string) => {
        const key = Object.keys(menuImages).find(path => path.includes(name))
        return key ? menuImages[key].default : ''
    }

    // メニューアイコンのスタイル
    const menuIconStyle = `w-15 h-15 rounded-sm ${hoverStyle}`

    return (
        <nav className="sticky w-70 h-15 p-2.5 rounded-4xl bottom-0 flex gap-12 justify-center items-center bg-cyan-800">
            {/* 設定呼び出しボタン */}
            <button>
                <img
                    src={getMenuIcon('call-settings')}
                    className={menuIconStyle}
                    onClick={() => alert('設定呼び出しボタンがクリックされました')}
                />
            </button>
            
            {/* 背景色変更ボタン */}
            <button>
                <img
                    src={getMenuIcon('change-bg')}
                    className={menuIconStyle}
                    onClick={() => alert('背景色変更ボタンがクリックされました')}
                />
            </button>

            {/* 設定保存ボタン */}
            <button>
                <img
                    src={getMenuIcon('save')}
                    className={menuIconStyle}
                    onClick={() => alert('設定保存ボタンがクリックされました')}
                />
            </button>

        </nav>
    )
}