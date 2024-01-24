import { IImageProps } from "../../types/common";

export interface IHeroProps {
    image?: IImageProps;
    video?: string;
    primaryHeading?: string;
    secondaryHeading?: string;
    variant?: 'small' | 'large';
}