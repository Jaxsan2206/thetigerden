const mapFrom = (content: any): any => {
    return {
        elements: content?.fields?.copy || null
    }
}

export default mapFrom; 