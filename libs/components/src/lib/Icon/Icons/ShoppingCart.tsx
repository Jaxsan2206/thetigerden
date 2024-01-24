import React from "react";
import { IIconProps } from "../Icon.interface";

const ShoppingCart: React.FC<IIconProps> = ({ size = '24px', color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="10" cy="20.5" r="1" />
    <circle cx="18" cy="20.5" r="1" />
    <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" />
  </svg>
);

export default ShoppingCart;
