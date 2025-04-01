import { useEffect, useState } from "react";
import { fetchPhotos, fetchComments, deletePhoto, deleteComment, isAdmin } from "../../utils/requests";

function Dashboard() {
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const adminStatus = await isAdmin();
      setAdmin(adminStatus);

      if (adminStatus) {
        const photosData = await fetchPhotos();
        setPhotos(photosData);

        fetchComments(setComments);
      }
    };

    loadData();
  }, []);

  if (!admin) {
    return <p>You are not authorized to access this page.</p>;
  }

  return (
    <div>
      <h2>Admin Panel</h2>

      <h3>Photos</h3>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.image} alt="Photo" width="100" />
          <button onClick={() => handleDeletePhoto(photo.id)}>Delete</button>
        </div>
      ))}

      <h3>Comments</h3>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
        </div>
      ))}
    </div>
  );

  async function handleDeletePhoto(photoId) {
    await deletePhoto(photoId);
    setPhotos(photos.filter(photo => photo.id !== photoId));
  }

  async function handleDeleteComment(commentId) {
    await deleteComment(commentId);
    setComments(comments.filter(comment => comment.id !== commentId));
  }
}

export default Dashboard;
