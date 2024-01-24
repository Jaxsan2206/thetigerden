

const mapFrom = (content)=> {
    const { announcementMessage } = content.fields
    return {
        message: announcementMessage
    }
}

export default mapFrom; 