import React from 'react'
import { ILinkProps } from './Link.interface'
import Link from 'next/link';

const NextLink: React.FC<React.PropsWithChildren<ILinkProps>> = ({ children, href = '', ...rest }) => {
  return (
    <Link href={href} {...rest}>{children}</Link>
  )
}

export default NextLink; 