import { IImageProps } from "../../types/common";
import { IButtonProps } from "../Button/Button.interface";

export interface IFeaturePanelProps {
  copy: string;
  title: string;
  cta: IButtonProps;
  image: IImageProps;
}
