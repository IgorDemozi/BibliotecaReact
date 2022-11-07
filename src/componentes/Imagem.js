import React from 'react'

const Imagem = ({className, src, alt}) => {
  return (
    <img className={className} src={src} alt={alt}/>
  )
}

export default Imagem