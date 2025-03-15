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
import { Parse } from '../../../parse'; 
import { Link,  } from "react-router"; 

export default function WindowGallery() {
  const [photos, setPhotos] = useState([]);
  const service = 'window-cleaning'; // Категорията, която искаме да извлечем

  useEffect(() => {
    const fetchPhotos = async () => {
      const Photo = Parse.Object.extend('WindowGallery'); // Увери се, че това е правилното име на колекцията
      const query = new Parse.Query(Photo);
      query.equalTo('service', service); // Филтрираме по категорията "patio-cleaning"
      query.descending('createdAt'); // Подреждаме снимките по дата (най-новите първи)

      try {
        const results = await query.find(); // Взимаме всички снимки от категорията "patio-cleaning"
        const photoData = results.map(photo => ({
          id: photo.id,
          name: photo.get('added_by'), // Или друго поле, което съдържа името на потребителя
          image: photo.get('imageUrl'), // Полето, което съдържа URL на снимката
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [service]); // Изпълнява се само когато се промени категорията

  return (
    <>
      <div className="center-contents">
        <h1>Welcome to ours gallery!</h1>
        <p>Browse our galleries.</p>
      </div>
      <nav className="gal-navbar">
  <ul className="gal-navbar-links">
    <li><Link to="/gallery/WindowGallery">Window Gallery</Link></li>
    <li><Link to="/gallery/PatioGallery">Patio Gallery</Link></li>
    <li><Link to="/gallery/FurnitureCleanGallery">Furniture Gallery</Link></li>
  </ul>
</nav>
      <div className="App-gallery">
        <h1>Window Cleaning Gallery</h1>
        <div className="photo-gallery">
          {photos.length > 0 ? (
            photos.map((photo) => (
              <div key={photo.id} className="photo-item-gallery">
                <a href={`/photo-details/${photo.id}`} className="photo-link">
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
    </>
  );
}
