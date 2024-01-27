import { IEmbedIFrameProps } from "../../components/src/lib/EmbedIFrame/EmbedIFrame.interface"

const mapFrom = (content: any )=> {
    const { iFrameCode } = content.fields
    const embedIFrameProps: IEmbedIFrameProps = {
        iframe: iFrameCode || ''
    }
    return embedIFrameProps;
}

export default mapFrom; 