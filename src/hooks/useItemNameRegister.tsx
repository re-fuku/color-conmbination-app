import { useRef } from 'react'

export function ItemNameRegister(prefix: string = "色") {
    const nameRegistry = useRef(new Map<string, string>())
    const counter = useRef(1);

    const getDisplayName = (id: string) => {
        if (!nameRegistry.current.has(id)) {
            nameRegistry.current.set(id, `${prefix} ${counter.current++}`)
        }
        return nameRegistry.current.get(id)
    }

    return { getDisplayName }
}