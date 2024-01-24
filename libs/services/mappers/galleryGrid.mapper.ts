

const mapFrom = (content)=> {
    const { images } = content.fields
    const imageProps = images.map(image => ({
        src: image.fields.file.url,
        original: image.fields.file.url,
        caption: image.fields.title,
        width: parseInt(image.fields.file.details.image.width),
        height: parseInt(image.fields.file.details.image.height)
    }))
    return {
        images: imageProps
    }
}

export default mapFrom; 