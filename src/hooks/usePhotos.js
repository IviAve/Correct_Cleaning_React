import { useEffect, useState } from 'react';
import { Parse } from '../parse';

export function usePhotos(category = null, limit = 3) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const Photo = Parse.Object.extend('WindowGallery');
      const query = new Parse.Query(Photo);
      query.descending('createdAt'); 
      query.limit(limit); 

      if (category) {
        query.equalTo('gallery', category); 
      }

      try {
        const results = await query.find();
        const photoData = results.map(photo => ({
          id: photo.id,
          name: photo.get('added_by'),
          image: photo.get('imageUrl'),
        }));
        setPhotos(photoData);
      } catch (error) {
        console.error('Error fetching photos:', error);
        setPhotos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [category, limit]); 

  return { photos, loading };
}
