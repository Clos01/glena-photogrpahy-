import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Art from "../images/ArtMuesuem.jpg";
import BlueDress from "../images/BlueDress.jpg";
import Dillion from "../images/Dillon.jpg";
import Downtown from "../images/Downtown.jpg";
import FlowerShoot from "../images/Flowersesh.jpg";
import HeadShot from "../images/HeadShot.jpg";




function Featured() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const photos = [
    {
      src: Art,
    },
    {
      src: BlueDress,
    },
    {
      src: Dillion ,
    },
    {
      src: Downtown,
    },
    {
      src: FlowerShoot,
    },
    {
      src: HeadShot,
    },
  
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="  p-4 bg-gray-200 grid grid-cols-3  g">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.src}
          alt={photo.title}
          onClick={() => openLightbox(index)}
          className="GalleyImgs"
        />
      ))}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                src: x.src,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

export default Featured;