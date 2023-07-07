import styled from "@emotion/styled";
import Image from "next/image";
import { INextImage } from "./Images.interface";
import { Box } from "../FlexBox/FlexBox";

export const NextImageContainer = styled(Box)({
  width: "inherit",
  height: "inherit",
  overflow: "hidden",
  position: "relative",
});

export const NextImage: React.FC<React.PropsWithChildren<INextImage>> = styled(Image)(
    ({ type }) => ({
        position: "fixed",
        objectFit: "cover",
        filter: type && "brightness(50%)",
    })
);
