import React from 'react'
import { StyledButton } from './Button.style'
import Link from 'next/link'; 

const withLink = (Component: React.FC) => {
  return function WrappedComponent(props: any){
    const { href, ...rest } = props; 
    return href ? (
      <Link href={href}>
        <Component {...rest}/>
      </Link>
    ) : (
      <Component {...rest}/>
    )
  }
}

const Button: React.FC<React.PropsWithChildren<any>> = ({ variant, children, ...rest }) =>  {
  return (
    <StyledButton as={'button'} variant={variant} {...rest}>
        {children}
    </StyledButton>
  )
}; 

const ButtonWithLink = withLink(Button)

export default ButtonWithLink; 