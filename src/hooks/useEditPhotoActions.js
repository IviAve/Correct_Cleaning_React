
import styles from "./EditImageModal.module.css"; // За стиловете

export default function EditImageForm({
  editedDescription,
  setEditedDescription,
  editedImgUrl,
  setEditedImgUrl,
  selectedService,
  setSelectedService,
  onSave,
  onCancel,
  loading,
}) {
  return (
    <div className={styles.logincenter}>
      <form className={styles.login} onSubmit={onSave}>
        <h2>Edit Image</h2>

        <div className={styles.field}>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose Service
            </option>
            <option value="window-cleaning">Window Cleaning</option>
            <option value="patio-cleaning">Patio Cleaning</option>
            <option value="furniture-cleaning">Furniture Cleaning</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="imageUrl">Your Image URL</label>
          <input
            type="text"
            value={editedImgUrl}
            onChange={(e) => setEditedImgUrl(e.target.value)}
            required
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="description">Description</label>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" disabled={loading} className={styles.saveBtn}>
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
