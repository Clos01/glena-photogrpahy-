import React from 'react'
import img1 from './path/to/image1.jpg';
import img2 from './path/to/image2.jpg';
import img3 from './path/to/image3.jpg';
import img4 from './path/to/image4.jpg';
import img5 from './path/to/image5.jpg';

function GalleryImgs() {
    const images = ['url1', 'url2', 'url3', 'url4', 'url5','url6']; 
  return (
    <>
      <div className='gallery'>
      {images.map((img, index) => (
        <div key={index} className='gallery-item'>
          <img src={img} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
    
    </>
  )
}

export default GalleryImgs