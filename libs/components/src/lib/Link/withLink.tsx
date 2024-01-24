import styled from "@emotion/styled";
import Link from "next/link";
import { ILinkProps } from "./Link.interface";

export const StyledNextLink = styled(Link)({
      display: 'flex',
  }
)

export const withLink = <Props extends object>(BaseComponent: React.FC<Props>): React.FC<Props & ILinkProps> => 
({ href, ...rest}: ILinkProps ) => {
    return href ? (
      <StyledNextLink href={href}>
        <BaseComponent {...rest as Props} />
      </StyledNextLink>
    ) : (
      <BaseComponent {...rest as Props} />
    );
};