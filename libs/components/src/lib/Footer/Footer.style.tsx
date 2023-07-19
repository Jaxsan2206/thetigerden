import styled from "@emotion/styled";
import NextLink from "../Link/Link";
import { ILinkProps } from "../Link/Link.interface";
import { LinkProps } from "next/link";
import { IBaseProps } from "../../types/common";
import { Column, Container } from "../Layout/Layout";
import { IColumnProps, IContainerProps } from "../Layout/Layout.interface";
import { IPageTitleProps } from "../Typography/Typography.interface";
import { PageTitle } from "../Typography/Typography";

//TODO: Fix the Interfaces here
export const FooterLinks: React.FC<React.PropsWithChildren<ILinkProps & LinkProps & IBaseProps>> = styled(NextLink)(
    ({ theme: { space }}) => ({
        lineHeight: space.large,  
        paddingTop: space.xsmall, 
    })
)

export const FooterWrapper: React.FC<React.PropsWithChildren<IContainerProps & IBaseProps>> = styled(Container)(
    ({ theme: { space }}) => ({
        paddingTop: space.xlarge, 
        paddingBottom: space.xlarge, 
        display: 'flex', 
        flexWrap: 'wrap'
    })
)

export const ImageColumn: React.FC<React.PropsWithChildren<IColumnProps & IBaseProps>> = styled(Column)(
    ({ theme: {}}) => ({
        display: 'flex', 
        flexDirection: 'column'
    })
)

export const LinksColumn: React.FC<React.PropsWithChildren<IColumnProps & IBaseProps>> = styled(Column)(
    ({ theme: { space }}) => ({
        flexDirection: "column", 
        display: "flex", 
        paddingLeft: space.medium, 
        paddingRight: space.medium
    })
)

export const LinksColumnTitle: React.FC<React.PropsWithChildren<IPageTitleProps & IBaseProps>> = styled(PageTitle)(
    ({ theme: { space }}) => ({
        paddingBottom: space.base, 
        size: 'medium', 
        fontWeight: 600
    })
)

export const ButtonColumn: React.FC<React.PropsWithChildren<IColumnProps & IBaseProps>> = styled(Column)(
    ({ theme: { space }}) => ({
        flexDirection: "column", 
        display:"flex", 
        height: space.xxxxlarge, 
        alignItems: "center"
    })
)