import React from 'react'

function ImageList(props) {
  const images = props.images.map((image)=>{
    return <div>
        <img key={image.id} src={image.webformatURL} alt='image' />
    </div>
  })
  return (
    <div>{images}</div>
  )
}

export default ImageList