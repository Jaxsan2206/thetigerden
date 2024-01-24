import React from 'react'
import { IIconProps } from '../Icon.interface'

const RightArrow: React.FC<IIconProps> = ({ size, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
  )
}

export default RightArrow