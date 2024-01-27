import { ITileProps } from "../../components/src/lib/Tile/Tile.interface"

const mapFrom = (content: any)=> {
    const { title, hoverText, image  } = content?.fields
    const tileProps: ITileProps = {
        title: title || '',
        hoverText: hoverText || '',
        image: {
            src: image?.fields?.file?.url || '',
            alt: image?.fields?.title || ''
        }
    }
    return tileProps
}

export default mapFrom; 