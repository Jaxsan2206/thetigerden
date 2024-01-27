const mapFrom = (content: any)=> {
    return {
        title: content?.fields?.title || '',
        copy: content?.fields?.copy || '',
        formSchema: content?.fields?.formSchema?.form || []
    }
}

export default mapFrom; 