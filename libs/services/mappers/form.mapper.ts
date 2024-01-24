
const mapFrom = (content)=> {
    return {
        title: content.fields.title,
        copy: content.fields.copy,
        formSchema: content.fields.formSchema.form
    }
}

export default mapFrom; 