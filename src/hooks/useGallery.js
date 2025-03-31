

// import { useEffect, useState } from "react";
// import { Parse } from "../services/parse"; 

// export function useGallery(service = null, limit = null) {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       setLoading(true);
//       const Photo = Parse.Object.extend("WindowGallery");
//       const query = new Parse.Query(Photo);
      
//       if (service) {
//         query.equalTo("service", service);
//       }
      
//       query.descending("createdAt");

//       if (limit) {
//         query.limit(limit);
//       }

//       try {
//         const results = await query.find();
//         const photoData = results.map(photo => ({
//           id: photo.id,
//           name: photo.get("added_by"),
//           image: photo.get("imageUrl"),
//         }));
//         setPhotos(photoData);
//       } catch (error) {
//         console.error("Error fetching photos:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPhotos();
//   }, [service, limit]);

//   return { photos, loading };
// }


import { useEffect, useState } from "react";
import { fetchPhotos } from "../utils/requests"; 

export function useGallery(service = null, limit = null) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      try {
        const photoData = await fetchPhotos(service, limit);
        setPhotos(photoData);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [service, limit]);

  return { photos, loading };
}
