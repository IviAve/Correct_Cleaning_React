export default function ContactWithUs () {
    return (
        


      <section className="contact_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>
              Contact Us or Get Service
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
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

                <div>
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
                
                <div>
                  <input type="text" className="message-box" placeholder="Message" />
                </div>
                <div className="d-flex ">
                  <button>
                    SEND
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_container">
                <div className="map">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed/v1/place?q=Paris&key=YOUR_API_KEY"
                  allowFullScreen
                ></iframe>
                <div id="googleMap" style={{ width: "100%", height: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    )
}