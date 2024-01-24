import * as React from "react";
import { ExternalLink, ShoppingCart } from "./Icons";
import { Box } from "../FlexBox/FlexBox";
import Burger from "./Icons/Burger";
import DownArrow from "./Icons/DownArrow";
import { IIconWrapperProps } from "./Icon.interface";
import YouTube from "./Icons/YouTube";
import Instagram from "./Icons/Instagram";
import Facebook from "./Icons/Facebook";
import Tiktok from "./Icons/Tiktok";
import RightArrow from "./Icons/RightArrow";
import LeftArrow from "./Icons/LeftArrow";

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "ShoppingCart":
      return ShoppingCart;

    case "ExternalLink":
      return ExternalLink;

    case "Burger":
      return Burger;

    case "DownArrow":
      return DownArrow;

    case "RightArrow":
      return RightArrow;

    case "LeftArrow":
      return LeftArrow;

    case "YouTube":
      return YouTube;

    case "Instagram":
      return Instagram;

    case "Facebook":
      return Facebook;

    case "Tiktok":
      return Tiktok;

    default:
      return null;
  }
};

const Icon: React.FC<React.PropsWithChildren<IIconWrapperProps>> = ({
  name,
  color = "black",
  size = "36px",
  minWidth,
  ...rest
}) => {

  //  TODO: Get back an object, that has the component and props key
  const IconComponent = getIcon(name);

  const iconComponentProps = {
    color,
    size,
  };

  return (
    IconComponent && (
      <Box
        height={size}
        width={size}
        minWidth={minWidth}
        data-testid="icon"
        {...rest}
      >
        <IconComponent {...iconComponentProps} />
      </Box>
    )
  );
};

export default Icon;
