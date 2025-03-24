
import styles from "../../auth/Forms.module.css";
import { useState } from 'react';
import { Parse } from '../../../services/parse'; 
import { useNavigate } from "react-router-dom"; 

import { useError } from "../../context/error/useError"; 

function CreateImg() {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [description, setDescription] = useState(''); 
  const [loading, setLoading] = useState(false);
  const { showError } = useError();
  const navigate = useNavigate();

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageUrl || !selectedService) {
      alert('Please provide an image URL and a service.');
      return;
    }

    setLoading(true);

    try {
      const currentUser = Parse.User.current();
      if (!currentUser) {
        showError("You must be logged in to upload images.");
        setLoading(false);
        return;
      }

      const Photo = Parse.Object.extend('WindowGallery');
      const newPhoto = new Photo();
      newPhoto.set('imageUrl', imageUrl);
      newPhoto.set('service', selectedService);
      newPhoto.set('description', description); 
      newPhoto.set('ownerId', currentUser.id); 
      newPhoto.set('added_by', currentUser.get("username")); 

      const acl = new Parse.ACL();
      acl.setPublicReadAccess(true); 
      acl.setWriteAccess(currentUser, true); 
      newPhoto.setACL(acl);

      await newPhoto.save();

      setImageUrl('');
      setSelectedService('');
      setDescription('');
    } catch (error) {
      showError('Error saving photo:', error);
    }
    setLoading(false);
    navigate("/gallery");
  };

  return (
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={handleUpload}>
        <h2>Upload Image</h2>

        <div className={styles.field}>
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
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder=""
            rows="4"
          ></textarea>
        </div>

        <button className={styles.btnreglog} type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}

export default CreateImg;
