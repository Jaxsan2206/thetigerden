import styled from "@emotion/styled";
import Image from "next/image";
import { Container } from "../Layout/Layout";
import { INextImage } from "./Images.interface";
import { ImageProps as NextImageProps } from "next/image";

export const NextImageContainer = styled(Container)();

export const NextImage: React.FC<
    React.PropsWithChildren<NextImageProps & INextImage>
> = styled(Image)(({ type }) => ({
    objectFit: "contain",
    width: "100%",
    position: "relative",
    height: "unset",
    filter: type && "brightness(50%)",
}));
