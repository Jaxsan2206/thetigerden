import { IButtonProps } from "../Button/Button.interface";
import { ITileProps } from "../Tile/Tile.interface";

export interface ITitleGroupProps {
    title: string;
    tiles: ITileProps[];
    cta: IButtonProps;
}