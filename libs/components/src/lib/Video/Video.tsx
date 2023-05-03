import React from 'react'
import { ReactVideo } from './Video.style'

const Video: React.FC= () =>  {
  return (
    <ReactVideo url={'https://youtu.be/FNFG7O6z_Qo'} loop={true} controls={false}/>
  )
}

export default Video; 