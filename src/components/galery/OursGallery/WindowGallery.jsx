


// import { useEffect, useState } from 'react';
// import { Parse } from '../../../services/parse'; 
// import { Link,  } from "react-router"; 

// export default function WindowGallery() {
//   const [photos, setPhotos] = useState([]);
//   const service = 'window-cleaning'; 

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       const Photo = Parse.Object.extend('WindowGallery'); 
//       const query = new Parse.Query(Photo);
//       query.equalTo('service', service); 
//       query.descending('createdAt'); 

//       try {
//         const results = await query.find(); 
//         const photoData = results.map(photo => ({
//           id: photo.id,
//           name: photo.get('added_by'), 
//           image: photo.get('imageUrl'), 
//         }));
//         setPhotos(photoData);
//       } catch (error) {
//         console.error('Error fetching photos:', error);
//       }
//     };

//     fetchPhotos();
//   }, [service]); 

//   return (
//     <>
//       <div className="center-contents">
//         <h1>Welcome to ours gallery!</h1>
//         <p>Browse our galleries.</p>
//       </div>
//       <nav className="gal-navbar">
//   <ul className="gal-navbar-links">
//     <li><Link to="/gallery/WindowGallery">Window Gallery</Link></li>
//     <li><Link to="/gallery/PatioGallery">Patio Gallery</Link></li>
//     <li><Link to="/gallery/FurnitureCleanGallery">Furniture Gallery</Link></li>
//   </ul>
// </nav>
//       <div className="App-gallery">
//         <h1>Window Cleaning Gallery</h1>
//         <div className="photo-gallery">
//           {photos.length > 0 ? (
//             photos.map((photo) => (
//               <div key={photo.id} className="photo-item-gallery">
//                 <a href={`/photo-details/${photo.id}`} className="photo-link">
//                   <img
//                     src={photo.image}
//                     alt={photo.name}
//                     className="photo-image-gallery"
//                   />
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p>Loading photos...</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }


import { useGallery } from "../../../hooks/useGallery";
import { Link } from "react-router";

export default function PatioGallery() {
  const { photos, loading } = useGallery("window-cleaning");

  return (
    <>
      <div className="center-contents">
        <h1>Welcome to our gallery!</h1>
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
        <h1>Patio Cleaning Gallery</h1>
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <div className="photo-gallery">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <div key={photo.id} className="photo-item-gallery">
                  <a href={`/photo-details/${photo.id}`} className="photo-link">
                    <img src={photo.image} alt={photo.name} className="photo-image-gallery" />
                  </a>
                </div>
              ))
            ) : (
              <p>No photos available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
