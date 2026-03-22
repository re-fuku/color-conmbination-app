
const layoutImages = import.meta.glob<{ default: string}>(
    '../../assets/layouts/layout*.svg',
    { eager: true}
)

export default function LayoutPanel() {
    // グリッドで表示するアイコンのURL配列を生成
    const layoutIcons = Object.values(layoutImages).map((mod) => mod.default);

    return (
        <div className="p-5 flex flex-col h-1/2 bg-cyan-700 rounded-2xl rounded-tl-none overflow-auto scrollbar-hide">
            {/* 3列のグリッドレイアウト */}
            <div className="grid grid-cols-3 gap-2 p-1">
                {layoutIcons.map((icon, index) => (
                    <button
                        key={index}
                        className="aspect-square bg-item-bg w-20 h-20 hover:shadow-2xl"
                    >   
                        <img
                            src={icon}
                            alt={`Layout ${index + 1}`}
                            className="w-full h-full object-contain group-hover:scale-110"
                        />
                    </button>
                ))}
            </div>
        </div>
    )

}