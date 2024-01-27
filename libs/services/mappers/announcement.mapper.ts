import { IAnnouncement } from "../../components/src/lib/Announcement/Announcement";

const mapFrom = (content: any ): IAnnouncement => {
    const { announcementMessage } = content.fields
    return {
        message: announcementMessage || ''
    }
}

export default mapFrom; 