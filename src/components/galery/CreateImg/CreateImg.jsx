
import styles from "./CreateImg.module.css"

import { useState } from 'react';
import { Parse } from '../../../parse'; // Импортиране на Parse
import { useNavigate } from "react-router-dom"; 

function CreateImg() {
  const [imageUrl, setImageUrl] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageUrl || !addedBy || !selectedService) {
      alert('Please provide a name, an image URL, and a service.');
      return;
    }

    setLoading(true);

    try {
      const Photo = Parse.Object.extend('WindowGallery');
      const newPhoto = new Photo();
      newPhoto.set('added_by', addedBy);
      newPhoto.set('imageUrl', imageUrl);
      newPhoto.set('service', selectedService); // Запазваме избраната услуга
      await newPhoto.save();

      // Изчистваме полетата след успешен запис
      setAddedBy('');
      setImageUrl('');
      setSelectedService('');
    } catch (error) {
      console.error('Error saving photo:', error);
    }
    setLoading(false);
    navigate("/gallery");
  };

  return (
    
      

      <div className={styles.logincenter}>
      
        <form className={styles.login} onSubmit={handleUpload}>
        <h2>Upload ImageUrl</h2>
          <div className={styles.field}>
            <label htmlFor="username">Added By</label>
            <input
              type="text"
              placeholder="username"
              value={addedBy}
              onChange={(e) => setAddedBy(e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service">Choice Service</label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="" disabled>Choice Service</option>
              
              <option value="window-cleaning">Window Cleaning</option>
              <option value="patio-cleaning">Patio Cleaning</option>
              <option value="furniture-cleaning">Furniture Cleaning</option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="imageUrl">Your Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          <button className={styles.btnreglog} type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    
  );
}

export default CreateImg;
