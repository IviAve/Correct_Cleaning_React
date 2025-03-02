import { useState } from 'react';
import { Parse } from '../../parse'; // Импортиране на Parse

function CreateImg() {




  const [imageUrl, setImageUrl] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!imageUrl || !addedBy) {
      alert('Please provide a name and an image URL.');
      return;
    }

    setLoading(true);

    try {
      const Photo = Parse.Object.extend('PatioGallery');
      const newPhoto = new Photo();
      newPhoto.set('added_by', addedBy);
      newPhoto.set('imageUrl', imageUrl); // Записваме само линк към изображението
      await newPhoto.save();

      // Изчистваме полетата след успешен пост
      setAddedBy('');
      setImageUrl('');
    } catch (error) {
      console.error('Error saving photo:', error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Upload ImageUrl</h1>

      <div className="login-center">
      <form  className="login" onSubmit={handleUpload}>
        <div className="field">
        <label htmlFor="username">Added By</label>
        <input
          type="text"
          placeholder="Your name"
          value={addedBy}
          onChange={(e) => setAddedBy(e.target.value)}
          required
        />
        </div>
        <div className="field">
        <label htmlFor="username">Your imageUrl</label>
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
        </div>

        <button className="btn-reg-log" type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload'}</button>
      </form>
    </div>
    </div>
  );
}





export default CreateImg;
