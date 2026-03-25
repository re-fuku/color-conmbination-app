import type { ColorStop } from "../../../App"

type Props = {
    colors: ColorStop[]
    setColors: (c:ColorStop[]) => void
    styles: {
        card: string
        label: string
        input: string
        unit: string
    }
}

export default function AddItemButon(colors, setColors, styles) {

    const addItem = () => {
        
    }


    return (
        <button 
            className="w-full bg-transparent font-text-color flex justify-center justify-items-center"
            onClick={() => addItem()}
        >
            <span className="bg-blue-500 w-10 h-10 rounded-full text-3xl font-bold flex justify-items-center justify-center">+</span>
        </button>
    )
}