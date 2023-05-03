import React from 'react'
import { Container } from '../Layout/Layout'; 
import Image from 'next/image';

const Hero = () => {
  return (
    <Container>
        <Image src="https://images.ctfassets.net/c5iz9ysb7wxa/5TVvITd7FpMnvSyne4kv1s/25daa36ea01c7b52f9d22ca2b6db2dd7/image_1.png" alt ="Tiger den hero" width={1440} height={620}></Image>
    </Container>
  )
}

export default Hero