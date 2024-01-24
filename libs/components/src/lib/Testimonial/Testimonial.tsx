import React from "react";
import {
  CardContainer,
  MessageContainer,
  SpeechMark,
  UserContainer,
  UserImage,
  UserInformation,
  UserInitials,
} from "./Testimonial.style";
import { Text } from "../Typography/Typography";
import { ITestimonialProps } from "./Testimonial.interface";
import { IImageProps } from "../../types/common";

const Testimonial: React.FC<React.PropsWithChildren<ITestimonialProps>> = ({
  userImage,
  username,
  date,
  message,
}) => {

  const initials = username.split(' ').map(el => el[0].toUpperCase()).join('');

  return (
    <CardContainer>
      <UserContainer>
        {userImage?.src ? (
          <UserImage {...(userImage as IImageProps)} />
        ) : (
          <UserInitials initials={initials} />
        )}
        <UserInformation>
          <Text>{username}</Text>
          <Text>{date}</Text>
        </UserInformation>
      </UserContainer>
      <MessageContainer>
        <SpeechMark>“</SpeechMark>
        <Text>{message}</Text>
      </MessageContainer>
    </CardContainer>
  );
};

export default Testimonial;