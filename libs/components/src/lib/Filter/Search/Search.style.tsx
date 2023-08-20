import styled from "@emotion/styled";
import { IBaseProps } from "../../../types/common";

export const SearchInput: React.FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & IBaseProps> = styled('input')(
    ({ theme: { }}) => ({
        all: 'unset', 
        border: '1px solid black', 
        borderRadius: '10px', 
        padding: '10px 15px', 
        width: '30%', 
        minWidth: '200px'
    })
)