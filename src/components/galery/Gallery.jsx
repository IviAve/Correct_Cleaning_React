// import { Link } from 'react-router'




// export default  function OursGallery () {
//   return (
//     <>
//     <div className="center-contents">
//     <h1>Welcome to ours gallery!</h1>
//       <p>Browse our galleries.</p>
//       </div>
//     <nav className="gal-navbar">
//       <ul className="gal-navbar-links">
//         <li><a href="#window-gallery">Window Gallery</a></li>
//         <li><a href="#patio-gallery">Patio Gallery</a></li>
//         <li><a href="#furniture-gallery">Furniture Gallery</a></li>
//       </ul>
//     </nav>
//     </>
//   );
// };


import { useEffect, useState } from 'react';
import { Parse } from '../../parse'; 

export default function OursGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const Photo = Parse.Object.extend('WindowGallery');
      const query = new Parse.Query(Photo);
      query.descending('createdAt'); 
      query.limit(3); 

      try {
        const results = await query.find();
        const photoData = results.map(photo => ({
          id: photo.id,
          name: photo.get('added_by'),
          image: photo.get('imageUrl')
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
<>
    <div className="center-contents">
    <h1>Welcome to ours gallery!</h1>
      <p>Browse our galleries.</p>
      </div>
    <nav className="gal-navbar">
      <ul className="gal-navbar-links">
        <li><a href="/gallery/WindowGallery">Window Gallery</a></li>
        <li><a href="/gallery/PatioGallery">Patio Gallery</a></li>
        <li><a href="/gallery/FurnitureCleanGallery">Furniture Gallery</a></li>
      </ul>
    </nav>
    <div className="App-gallery">
      <h1>Last three images</h1>
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




