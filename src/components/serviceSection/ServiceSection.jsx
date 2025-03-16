


export default function ServiceSection() {
  return (



    <section className="service_section layout_padding">
      <div className="container ">
        <div className="heading_container heading_center">
          <h2> Our Services </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box ">
              <div className="img-box">

                <img src="./images/window-cleaning.png" alt="" />


              </div>
              <div className="detail-box">
                <h5>
                  Windows Claening
                </h5>
                <p>
                  Windows,shutters and screen claning.
                </p>
                <p>
                  window frames.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box ">
              <div className="img-box">

                <img src="./images/upholstery.png" alt="" />

              </div>
              <div className="detail-box">
                <h5>
                  Upholstery Cleaning
                </h5>
                <p>
                  Cleaning sofas,chair,mattresses,leather,carpet/rug cleaning etc.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mx-auto">
            <div className="box ">
              <div className="img-box">
                <img src="./images/cleaner.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Patio Cleaning
                </h5>
                <p>
                  Jet & Patio Cleaning.Professional Cleaning of Outdoor Spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="">
            View More
          </a>
        </div>
      </div>
    </section>

  )
}