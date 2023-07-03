import styled from "@emotion/styled";
import NextLink from "../Link/Link";
import { LinkProps } from "next/link";

export const FooterLinks: React.FC<React.PropsWithChildren<LinkProps>> = styled(NextLink)(
    {
        lineHeight:'24px', 
        paddingTop: '5px'
    }
)