import type { HeaderFooterConfig } from "../../App"

type Props = {
    header: HeaderFooterConfig
    footer: HeaderFooterConfig
    previewBG: string
}

export default function HeaderFooter({header, footer, previewBG}: Props) {

        return (
        <div
            className="bg-white w-full h-full flex flex-col justify-between"
        >
            <header
                style={{
                    width: "100%",
                    height: `${header.size}px`,
                    backgroundColor: header.color,
                    borderBottomRightRadius: `${header.roundedRect}px`,
                    borderBottomLeftRadius: `${header.roundedRect}px`,
                }}
            />

            <footer 
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