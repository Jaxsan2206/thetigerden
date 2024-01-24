import React from "react";
import { IIconProps } from "../Icon.interface";

const Instagram: React.FC<IIconProps> = ({ color, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
    >
      <g clip-path="url(#clip0_98_173)">
        <path
          d="M14 0C21.732 0 28 6.26803 28 14C28 21.732 21.732 28 14 28C6.26803 28 0 21.732 0 14C0 6.26803 6.26803 0 14 0ZM17.6342 5.25H10.3658C7.38663 5.25 5.37133 7.1778 5.25525 10.0977L5.25 10.3659V17.5988C5.25 19.1159 5.74397 20.4213 6.7319 21.374C7.61647 22.2257 8.77473 22.6821 10.094 22.743L10.4012 22.75H17.5988C19.1159 22.75 20.386 22.256 21.3034 21.374C22.1924 20.5177 22.6821 19.3235 22.7435 17.9347L22.75 17.634V10.3659C22.75 8.88405 22.256 7.6139 21.3387 6.69655C20.4826 5.80755 19.2883 5.3179 17.928 5.25653L17.634 5.25H17.6342ZM10.4011 6.87295H17.6693C18.7277 6.87295 19.6098 7.19052 20.2448 7.82565C20.7947 8.40782 21.137 9.19742 21.1902 10.1131L21.1975 10.3659V17.634C21.1975 18.7278 20.8094 19.6099 20.1743 20.2097C19.5922 20.7595 18.8023 21.0721 17.8597 21.1204L17.5987 21.127H10.4012C9.34278 21.127 8.46067 20.8095 7.82565 20.2097C7.24348 19.6275 6.92813 18.8378 6.8796 17.8678L6.87295 17.5988V10.3658C6.87295 9.30732 7.19052 8.42532 7.82565 7.79018C8.37538 7.24033 9.19205 6.92778 10.1396 6.87948L10.4012 6.87283H17.6694H10.4012L10.4011 6.87295ZM14 9.4486C11.5302 9.4486 9.48383 11.4597 9.48383 13.9648C9.482 14.5584 9.59756 15.1464 9.82387 15.6952C10.0502 16.2439 10.3828 16.7425 10.8025 17.1623C11.2222 17.582 11.7208 17.9146 12.2696 18.1409C12.8183 18.3672 13.4064 18.4828 14 18.4809C16.5051 18.4809 18.5162 16.4345 18.5162 13.9648C18.5162 11.4949 16.4698 9.4486 14 9.4486ZM14 11.0715C15.5877 11.0715 16.8931 12.377 16.8931 13.9648C16.8931 15.5524 15.5876 16.8579 14 16.8579C12.4123 16.8579 11.1069 15.5524 11.1069 13.9648C11.1069 12.3769 12.4124 11.0715 14 11.0715ZM18.6926 8.3195C18.4212 8.3195 18.161 8.4273 17.9691 8.61918C17.7772 8.81106 17.6694 9.07131 17.6694 9.34267C17.6694 9.61403 17.7772 9.87427 17.9691 10.0662C18.161 10.258 18.4212 10.3658 18.6926 10.3658C18.9639 10.3658 19.2242 10.258 19.4161 10.0662C19.6079 9.87427 19.7157 9.61403 19.7157 9.34267C19.7157 9.07131 19.6079 8.81106 19.4161 8.61918C19.2242 8.4273 18.9639 8.3195 18.6926 8.3195Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_98_173">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Instagram;
