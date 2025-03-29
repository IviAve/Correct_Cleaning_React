import { useState, useEffect } from "react";
import styles from "../auth/Forms.module.css";

export default function ServiceSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.circle}></div>
      </div>
    );
  }

  return (
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2> Our Services </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="./images/window-cleaning.png" alt="window cleaning" />
              </div>
              <div className="detail-box">
                <h5>Windows Cleaning</h5>
                <p>Windows, shutters and screen cleaning.</p>
                <p>Window frames.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="./images/upholstery.png" alt="upholstery cleaning" />
              </div>
              <div className="detail-box">
                <h5>Upholstery Cleaning</h5>
                <p>Cleaning sofas, chairs, mattresses, leather, carpet/rug cleaning, etc.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box">
              <div className="img-box">
                <img src="./images/cleaner.png" alt="patio cleaning" />
              </div>
              <div className="detail-box">
                <h5>Patio Cleaning</h5>
                <p>Jet & Patio Cleaning. Professional Cleaning of Outdoor Spaces.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">Under construction</a>
        </div>
      </div>
    </section>
  );
}
