import  type { CommonStyles } from "../SettingPanel"

type Props = {
    text: string
    size: number
    setSize: (size: number) => void
    commonStyles: CommonStyles
}


export default function ChangeSize({size, setSize}: Props) {
    return (
        <div className="flex bg-sky-100 text-black">
            <span className="">サイズ</span>
            <input 
                type="number"
                defaultValue={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                min={0}
                max={100}
            ></input>
        </div>
    )

}