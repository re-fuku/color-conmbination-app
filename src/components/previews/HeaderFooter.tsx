import type { HeaderFooterConfig } from "../../App"

type Props = {
    header: Record<string, any>
    footer: Record<string, any>
    previewBG: string
}

export default function HeaderFooter({header, footer}: Props) {

        return (
        <div
            className="bg-white w-full h-full rounded-2xl flex flex-col justify-between"
        >
            <header
                className="rounded-t-2xl"
                style={{
                    width: "100%",
                    height: `${header.size}px`,
                    backgroundColor: header.color,
                    borderBottomRightRadius: `${header.roundedRect}px`,
                    borderBottomLeftRadius: `${header.roundedRect}px`,
                }}
            />

            <footer 
                className="rounded-b-2xl"
                style={{
                    width: "100%",
                    height: `${footer.size}px`,
                    backgroundColor: footer.color,
                    borderTopRightRadius: `${footer.roundedRect}px`,
                    borderTopLeftRadius: `${footer.roundedRect}px`,
                }}
            />
        </div>
    )
}