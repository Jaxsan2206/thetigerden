import React from "react";
import { ButtonLabel, Container, Content, Wrapper } from "./Button.style";
import { IButtonProps } from "./Button.interface";
import Icon from "../Icon/Icon";

const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({
  variant = 'primary',
  children = null,
  icon = { name: null, iconPosition: 'end' },
  href = '',
  onClick,
  ...rest
}) => {
  const isExternalLink = href?.startsWith("http") || href?.startsWith("www");
  const iconName = icon?.name || (isExternalLink ? "ExternalLink" : null);
  const isIconButton = !children;
  return (
    <Wrapper as="button" onClick={onClick} variant={variant} {...rest}>
      <Container href={href} {...rest}>
        <Content isIconButton={isIconButton}>
          {icon?.iconPosition === "start" && <Icon name={iconName as string} mr={!isIconButton ? 'small' : null}/>}
          { !isIconButton && <ButtonLabel size={"small"} mt={'2px'}>{children}</ButtonLabel>}
          {icon?.iconPosition === "end" && <Icon name={iconName as string} size="20px" ml={!isIconButton ? 'small' : null }/>}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Button;
