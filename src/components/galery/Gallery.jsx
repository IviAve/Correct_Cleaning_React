


import styles from "../auth/Forms.module.css";
import { useGallery } from "../../hooks/useGallery";

export default function OursGallery() {
  const { photos, loading } = useGallery(null, 3); // Взимаме последните 3 снимки, без значение от service

   
  return (
    <>
      <div className="center-contents">
        <h1>Welcome to our gallery!</h1>
        <p>Browse our galleries.</p>
      </div>
      <nav className="gal-navbar">
        <ul className="gal-navbar-links">
          <li><a href="/gallery/WindowGallery">Window Gallery</a></li>
          <li><a href="/gallery/PatioGallery">Patio Gallery</a></li>
          <li><a href="/gallery/FurnitureCleanGallery">Furniture Gallery</a></li>
        </ul>
      </nav>
      <div className="App-gallery">
        <h1>Last three images</h1>
        {loading ? (
          <div className={styles.loader}>
          <div className={styles.circle}></div>
        </div>
        ) : (
          <div className="photo-gallery">
            {photos.length > 0 ? (
              photos.map((photo) => (
                <div key={photo.id} className="photo-item-gallery">
                  <a href={`/photo-details/${photo.id}`} className="photo-link">
                    <img src={photo.image} alt={photo.name} className="photo-image-gallery" />
                  </a>
                </div>
              ))
            ) : (
              <p>No photos available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
