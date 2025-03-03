// import { useState } from 'react';
// import { Parse } from '../../parse'; // Импортиране на Parse

// function CreateImg() {




//   const [imageUrl, setImageUrl] = useState('');
//   const [addedBy, setAddedBy] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!imageUrl || !addedBy) {
//       alert('Please provide a name and an image URL.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const Photo = Parse.Object.extend('PatioGallery');
//       const newPhoto = new Photo();
//       newPhoto.set('added_by', addedBy);
//       newPhoto.set('imageUrl', imageUrl); // Записваме само линк към изображението
//       await newPhoto.save();

//       // Изчистваме полетата след успешен пост
//       setAddedBy('');
//       setImageUrl('');
//     } catch (error) {
//       console.error('Error saving photo:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="App">
//       <h2>Upload ImageUrl</h2>

//       <div className="login-center">
//       <form  className="login" onSubmit={handleUpload}>
//         <div className="field">
//         <label htmlFor="username">Added By</label>
//         <input
//           type="text"
//           placeholder="Your name"
//           value={addedBy}
//           onChange={(e) => setAddedBy(e.target.value)}
//           required
//         />
//         </div>
//         <div>
//                   <select>
//                     <option value="" disabled selected>Choice Service</option>
//                     <option value="without service">Without Service</option>
//                     <option value="window-cleaning">Window Cleaning</option>
//                     <option value="patio-cleaning">Patio Cleaning</option>
//                     <option value="furniture-cleaning">Furniture Cleaning</option>
//                   </select>
//                 </div>
//         <div className="field">
//         <label htmlFor="username">Your imageUrl</label>
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={imageUrl}
//           onChange={(e) => setImageUrl(e.target.value)}
//           required
//         />
//         </div>

//         <button className="btn-reg-log" type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload'}</button>
//       </form>
//     </div>
//     </div>
//   );
// }





// export default CreateImg;


import { useState } from 'react';
import { Parse } from '../../parse'; // Импортиране на Parse

function CreateImg() {
  const [imageUrl, setImageUrl] = useState('');
  const [addedBy, setAddedBy] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <div className="App">
      <h2>Upload ImageUrl</h2>

      <div className="login-center">
        <form className="login" onSubmit={handleUpload}>
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

          <div className="field">
            <label htmlFor="imageUrl">Your Image URL</label>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          <button className="btn-reg-log" type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Upload'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateImg;
