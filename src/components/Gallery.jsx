import React from 'react';
import img1 from '../images/digital_artwork/IMG_1220.JPG';

const Gallery = () => {
  const artworks = [
    { id: 1, title: 'Artwork 1', imageUrl: img1, width: 600, height: 800 },
    { id: 2, title: 'Artwork 2', imageUrl: '../images/digital_artwork/IMG_1221.JPG', width: 400, height: 600 },
    { id: 3, title: 'Artwork 3', imageUrl: '../images/digital_artwork/IMG_1222.JPG', width: 800, height: 1200 },
    { id: 4, title: 'Artwork 4', imageUrl: '../images/digital_artwork/IMG_1223.JPG', width: 700, height: 1000 },
    { id: 5, title: 'Artwork 5', imageUrl: '../images/digital_artwork/IMG_1224.JPG', width: 500, height: 700 },
    { id: 6, title: 'Artwork 6', imageUrl: '../images/digital_artwork/IMG_1225.JPG', width: 600, height: 800 },
  ];

  const renderArtworks = () => {
    return artworks.map((artwork) => {
      return (
        <div key={artwork.id} className="artwork">
          <img src={artwork.imageUrl} alt={artwork.title} width={artwork.width} height={artwork.height} />
          <div className="title">{artwork.title}</div>
        </div>
      );
    });
  };

  return (
    <div className="gallery">
      <div className="artworks">{renderArtworks()}</div>
    </div>
  );
};

export default Gallery;
