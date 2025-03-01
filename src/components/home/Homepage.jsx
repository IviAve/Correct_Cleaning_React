export default function Homepage () {
    return(
        <>
    <div className="hero_area">
      <section className="slider_section ">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="detail-box">
                <h1>
                  Cleaning Windows <br />
                  Patio &amp; Furniture Cleaning
                  <br />
                  Services
                </h1>
                <p>
                  Windows cleaning and pressure washing is ONE OF THE BEST WAYS to
                  make your Home, Patio and Walkways LOOK NEW AGAIN.
                </p>
                <a href="./ContactWithUs">Contact Us</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/cc_tapp2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    
    <section className="feature_section">
      <div className="container">
        <div className="feature_container">
          <div className="box">
            <div className="img-box">
              <img src="images/rug-solid.svg" alt="" />
            </div>
            <h5 className="name">Window cleaning</h5>
          </div>
          <div className="box active">
            <div className="img-box">
              <img src="images/rug-solid.svg" alt="" />
            </div>
            <h5 className="name">Upholstery cleaning</h5>
          </div>
          <div className="box active">
            <div className="img-box">
              <img src="images/chair-solid.svg" alt="" />
            </div>
            <h5 className="name">Car Interior Detailing</h5>
          </div>
          <div className="box">
            <div className="img-box">
              <img src="images/rug-solid.svg" alt="" />
            </div>
            <h5 className="name">Carpet cleaning</h5>
          </div>
        </div>
      </div>
    </section>
    </div>
    </>

    );
}