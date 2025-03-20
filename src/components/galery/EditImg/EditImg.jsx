
import { useParams } from 'react-router';
import { useEditPhotoActions} from '../../../hooks/useEditPhotoActions';
import styles from "../../auth/Forms.module.css";

function EditImg() {
  const { id } = useParams(); 
  const {
    imageUrl,
    setImageUrl,
    selectedService,
    setSelectedService,
    description,
    setDescription,
    loading,
    isOwner,
    handleSubmit,
    error
  } = useEditPhotoActions(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isOwner) {
    return <p>You are not authorized to edit this image.</p>;
  }

  return (
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={handleSubmit}>
        <h2>Edit Image</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

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
            placeholder="Description"
            rows="4"
          ></textarea>
        </div>

        <button className={styles.btnreglog} type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Update'}
        </button>
      </form>
    </div>
  );
}

export default EditImg;
