import Announcement from "../../components/src/lib/Announcement/Announcement";

const componentMapper = {
    announcement: Announcement
}

const announcementPropsMapper = (content)=> {
    const { announcementMessage } = content.fields
    return {
        message: announcementMessage
    }
}

interface IPropsMapper {
    [key: string]: () => any
}

const propsMapper: IPropsMapper  = {
    announcement: announcementPropsMapper
}


const ComponentGenerator: React.FC<React.PropsWithChildren<{}>> = ({content}) => {
    const contentType = content.sys.contentType.sys.id;
    const Component = componentMapper[contentType]; 
    const componentProps = propsMapper[contentType](content)
    return <Component {...componentProps} />
}

export default ComponentGenerator; 