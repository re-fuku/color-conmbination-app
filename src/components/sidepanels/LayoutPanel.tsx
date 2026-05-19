
type Props = {
    selectedLayout: string
    setSelectedLayout: (index: string) => void
    layoutIcons: string[]
    hoverStyle: string
}

export default function LayoutPanel({selectedLayout, setSelectedLayout, layoutIcons, hoverStyle}: Props) {

    return (
        <div className= "p-2.5 flex flex-col justify-center w-full h-full scrollbar-hide bg-cyan-700 rounded-tr-3xl overflow-x-hidden overflow-y-auto">
            {/* 3列のレイアウトのグリッド */}
            <div className="grid grid-cols-3 gap-5">
                {layoutIcons.map((icon, index) => (
                    <button
                        key={index}
                        className={`
                            flex items-start aspect-square bg-item-bg w-20 h-20
                            ${selectedLayout === icon ? 'border-4 rounded-2xl border-sky-600 ': ''}
                            `
                        }
                        onClick={() => setSelectedLayout(icon)}
                    >
                        <img
                            src={icon}
                            alt={`Layout ${index + 1}`}
                            className={`object-contain rounded-2xl ${hoverStyle}`}
                        />
                    </button>
                ))}
            </div>
        </div>
    )

}