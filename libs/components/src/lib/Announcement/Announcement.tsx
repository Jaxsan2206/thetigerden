import React from "react";
import { Wrapper } from "./Announcement.style";

export interface IAnnouncement {
  message: string;
}

const Announcement: React.FC<React.PropsWithChildren<IAnnouncement>> = ({
  message = '',
}) => {
  return <>{message && <Wrapper>{message}</Wrapper>}</>;
};

export default Announcement;
