const mapFrom = (content: any)=> {
    return {
        elements: content?.fields?.copy || null
    }
}

export default mapFrom; 