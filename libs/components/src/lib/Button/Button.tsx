import React from "react";
import { StyledButton } from "./Button.style";
import Link from "next/link";

const withLink = (BaseComponent) => ({ href, ...rest}) => {
 
    return href ? (
      <Link href={href}>
        <BaseComponent {...rest} />
      </Link>
    ) : (
      <BaseComponent {...rest} />
    );

};

const Button: React.FC<React.PropsWithChildren<any>> = withLink(({
  variant,
  children,
  ...rest
}) => (
  <StyledButton as={"button"} variant={variant} {...rest}>
    {children}
  </StyledButton>
));

// const ButtonWithLink = withLink(Button);

export default Button;
