import React from 'react'
import { Wrapper } from './Announcement.style';

interface IAnnouncement {
    message: string; 
}

const Announcement: React.FC<React.PropsWithChildren<IAnnouncement>> = ({ message }) =>  {
  return (
    <Wrapper >
        {message}
    </Wrapper>
  )
}


export default Announcement