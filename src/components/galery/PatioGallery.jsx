import  { useEffect, useState } from 'react';
// import './galery.css';
import { Parse } from '../../parse'; // Импортиране на Parse

function PatioGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const Photo = Parse.Object.extend('PatioGallery');
      const query = new Parse.Query(Photo);

      try {
        const results = await query.find();
        const photoData = results.map(photo => ({
          name: photo.get('added_by'),
          image: photo.get('imageUrl')  // Вземаме директния URL на изображението, без .url()
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="App">
      <h1>Patio Gallery</h1>
      <div className="carousel">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <ul key={index} className="gallery">
              <h3>{photo.name}</h3>
             <li><img  src={photo.image} alt={photo.name}  /></li> 
            </ul>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </div>
  );
}

export default PatioGallery;
