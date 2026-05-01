
type Props = {
    selectedLayout: string
    setSelectedLayout: (index: string) => void
    layoutIcons: string[]
    hoverStyle: string
}


export default function LayoutPanel({selectedLayout, setSelectedLayout, layoutIcons, hoverStyle}: Props) {

    return (
        <div className= "p-2 flex flex-col w-full h-hull bg-cyan-700 rounded-2xl rounded-tl-none overflow-auto">
            {/* 3列のレイアウトのグリッド */}
            <div className="grid grid-cols-3 gap-5">
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
        </div>
    )

}