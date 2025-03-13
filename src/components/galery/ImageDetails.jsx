import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Parse } from '../../parse'; 
import { Link } from 'react-router';

function PhotoDetails() {
  const { id } = useParams(); 
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotoDetails = async () => {
      const Photo = Parse.Object.extend('WindowGallery');
      const query = new Parse.Query(Photo);

      try {
        const photoObj = await query.get(id); 
        const photoData = {
          name: photoObj.get('added_by'),
          image: photoObj.get('imageUrl'),
          service: photoObj.get('service'), 
        };
        setPhoto(photoData);
      } catch (error) {
        console.error('Error fetching photo details:', error);
      }
    };

    fetchPhotoDetails();
  }, [id]); 

  return (
    <div className="App">
      <h1>Photo Details</h1>
      {photo ? (
        <div>
          <h2>Added by: {photo.name}</h2>
          <img src={photo.image} alt={photo.name} style={{ maxWidth: '300px', maxHeight: '400px', objectFit: 'cover' }} />
          <p>Service: {photo.service}</p>
          <span className="buttonsAddDel">
          <Link to='/' className="button">Edit</Link>
                    <button
                        
                        className="button secondary"
                    >
                        Delete
                    </button>
          </span>
        </div>
        
      ) : (
        <p>Loading photo details...</p>
      )}
    </div>
  );
}

export default PhotoDetails;
