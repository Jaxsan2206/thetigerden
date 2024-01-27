

const mapFrom = (content: any )=> {
    const { images } = content?.fields
    const imageProps = images.map((image: any ) => ({
        src: image?.fields?.file?.url || '',
        original: image?.fields?.file?.url || '',
        caption: image?.fields?.title || '',
        width: parseInt(image?.fields?.file?.details?.image?.width) || null,
        height: parseInt(image?.fields?.file?.details?.image?.height) || null
    }))
    return {
        images: imageProps
    }
}

export default mapFrom; 