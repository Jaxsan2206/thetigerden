import React from "react";
import { IIconProps } from "../Icon.interface";

const Facebook: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
    >
      <g clipPath="url(#clip0_98_174)">
        <path
          d="M14 0C21.7315 0 28 6.2685 28 14C28 21.7315 21.7315 28 14 28C6.2685 28 0 21.7315 0 14C0 6.2685 6.2685 0 14 0ZM18.6667 8.491V5.25H15.9997C13.5497 5.25 12.0003 7.11667 12.0003 9.78717V11.732H9.33333V14.9718H12.0003V22.75H15.3335V14.9718H18.0005L18.6667 11.732H15.3335V10.4347C15.3335 9.13967 16.0008 8.491 17.3332 8.491H18.6667Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_98_174">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Facebook;
