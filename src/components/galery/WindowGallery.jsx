// import  { useEffect, useState } from 'react';
// // import './galery.css';
// import { Parse } from '../../parse'; // Импортиране на Parse

// function WindowGallery() {
//   const [photos, setPhotos] = useState([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const Photo = Parse.Object.extend('WindowGallery');
//       const query = new Parse.Query(Photo);

//       try {
//         const results = await query.find();
//         const photoData = results.map(photo => ({
//           name: photo.get('added_by'),
//           image: photo.get('imageUrl')  // Вземаме директния URL на изображението, без .url()
//         }));
//         setPhotos(photoData);
//       } catch (error) {
//         console.error('Error fetching photos:', error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Window Gallery</h1>
//       <div className="photo-gallery">
//         {photos.length > 0 ? (
//           photos.map((photo, index) => (
//             <div key={index} className="photo-item">
//               <h3>{photo.name}</h3>
//               <img src={photo.image} alt={photo.name} width="300" />
//             </div>
//           ))
//         ) : (
//           <p>Loading photos...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default WindowGallery;


import { useEffect, useState } from 'react';
import { Parse } from '../../parse'; // Импортиране на Parse

function WindowGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const Photo = Parse.Object.extend('WindowGallery');
      const query = new Parse.Query(Photo);

      try {
        const results = await query.find();
        const photoData = results.map(photo => ({
          id: photo.id, // Вземаме ID-то на снимката
          name: photo.get('added_by'),
          image: photo.get('imageUrl')  // Вземаме директния URL на изображението
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="App-gallery">
      <h1>Window Gallery</h1>
      <div className="photo-gallery">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="photo-item-gallery">
              <a href={`/photo-details/${photo.id}`} className="photo-link"  >
                <img
                  src={photo.image}
                  alt={photo.name}
                  className="photo-image-gallery"
                />
              </a>
            </div>
          ))
        ) : (
          <p>Loading photos...</p>
        )}
      </div>
    </div>
  );
}

export default WindowGallery;
