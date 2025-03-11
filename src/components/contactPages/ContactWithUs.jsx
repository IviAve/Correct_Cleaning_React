import styles from "./ContactWithUs.module.css"




export default function ContactWithUs() {
  return (



    <section className={styles.contact_section}>
      <div className={styles.container}>
        <div className={styles.heading_container}>
          <h2>
            Contact Us
          </h2>
        </div>
        <div className={styles.row}>
          <div className={styles.col_md_6}>
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>

              {/* <div>
                  <select>
                    <option value="" disabled selected>Choice Service</option>
                    <option value="without service">Without Service</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="patio-cleaning">Patio Cleaning</option>
                    <option value="furniture-cleaning">Furniture Cleaning</option>
                  </select>
                </div>

                <div>
                  <input type="date" placeholder="Choice date" />
                </div>
                 */}
              <div>
              <textarea className={styles.messagebox} placeholder="Message"></textarea>

              </div>
              <div className={styles.dflex}>
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>

          <div className={styles.col_md_6}>
            <div className={styles.name}>
              <h2>Нашето местоположение</h2>
            </div>
            <div className={styles.map_container}>
              <div className={styles.map}>
                {/* <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed/v1/place?q=Paris&key=YOUR_API_KEY"
                  allowFullScreen
                ></iframe> */}

                

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.022554837244!2d25.23804285165696!3d42.755374500808855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a907ad59aac1d7%3A0x56c142ecf0a54fe2!2z0KPQt9Cw0L3QsCAtINC60YPRgNC-0YDRgtC10L0g0LrQvtC80L_Qu9C10LrRgQ!5e0!3m2!1sbg!2sbg!4v1741438563460!5m2!1sbg!2sbg"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                

                {/* <div 
                id="googleMap" 
                style={{ width: "100%", height: "100%" }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



  )
}