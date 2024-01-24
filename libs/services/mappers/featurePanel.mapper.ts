import { IFeaturePanelProps } from "../../components/src/lib/FeaturePanel/FeaturePanel.interface"

const mapFrom = (content)=> {
    const { buttonLabel, buttonLink, copy, image, title } = content.fields
    const featurePanelProps: IFeaturePanelProps = {
        title: title,
        copy: copy,
        cta: {
            label: buttonLabel,
            url: buttonLink,
            variant: 'primary'
        },
        image: {
            src: image.fields.file.url,
            alt: image.fields.title
        }
    }
    return featurePanelProps
}

export default mapFrom; 