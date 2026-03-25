
type Props = {
    selectedLayout: string
    setSelectedLayout: (index: string) => void
    layoutIcons: string[]
}

const menuImages = import.meta.glob<{ default: string }>(
    '../../assets/menus/*svg',
    { eager: true}
)

export default function LayoutPanel({selectedLayout, setSelectedLayout, layoutIcons}: Props) {

    // ファイル名から特定のアイコンを取り出す関数
    const getMenuIcon = (name: string) => {
        const key = Object.keys(menuImages).find(path => path.includes(name))
        return key ? menuImages[key].default : ''
    }

    // hover時のスタイル
    const hoverStyle = "hover:border-white hover:border-2"
    // メニューアイコンのスタイル
    const menuIconStyle = `w-10 h-10 rounded-sm ${hoverStyle}`

    return (
        <div className= "p-5 flex flex-col h-1/2 bg-cyan-700 rounded-2xl rounded-tl-none overflow-auto scrollbar-hide">
            {/* 3列のレイアウトのグリッド */}
            <div className="grid grid-cols-3 gap-7.5">
                {layoutIcons.map((icon, index) => (
                    <button
                        key={index}
                        className={`
                            flex items-start aspect-square bg-item-bg w-20 h-20
                            ${selectedLayout === icon ? 'border-4 border-sky-600 rounded-xl': ''}
                            `
                        }
                        onClick={() => setSelectedLayout(icon)}
                    >   
                        <img
                            src={icon}
                            alt={`Layout ${index + 1}`}
                            className={`w-full h-full rounded-xl object-contain ${hoverStyle}`}
                        />
                    </button>
                ))}
            </div>

            {/* メニュー */}
            <nav className="sticky w-full h-[80px] rounded-xl bottom-0 mt-[-16px] flex justify-between items-center bg-cyan-800">
                {/* 背景色変更ボタン */}
                <button className="">
                    <img
                        src={getMenuIcon('change-bg')}
                        className={menuIconStyle}
                    />
                </button>

                {/* 設定保存ボタン */}
                <button>
                    <img
                        src={getMenuIcon('save')}
                        className={menuIconStyle}
                    />
                </button>

                {/* 設定呼び出しボタン */}
                <button>
                    <img
                        src={getMenuIcon('call-settings')}
                        className={menuIconStyle}
                    />
                </button>
            </nav>
        </div>
    )

}