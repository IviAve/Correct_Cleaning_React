import ClientSection from "../clientComments/ClientSection";

export default function HomePage () {
    return(
        <>
    {/* <div className="hero_area">
      <section className="slider_section ">
        <div className="container ">
          <div className="row">
            <div className="col_md_6 ">
              <div className="detail-box">
                <div id="home-h1">
                <h1>
                  Cleaning Windows <br />
                  Patio &amp; Furniture 
                  <br />
                
                </h1>
                </div>
                <div id="home-text">
                <p>
                  Windows cleaning and pressure washing is ONE OF THE BEST WAYS to
                  make your Home, Patio and Walkways LOOK NEW AGAIN.
                </p>
                </div>
                <a href="/contact">Contact Us</a>
              </div>
            </div>
            <div className="container-home">
              <div className="img-home">
                <img src="/images/fon1.jpg" alt="no_image" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
<article>
      <div className="content">
        <header>
          <hgroup>
            <h1> Windows </h1>
              <h2>
                Patio &amp; Furniture Cleaning
                
              </h2>
            </hgroup>
          </header>
          <section>
            
              <p> Crystal-clear windows and spotless surfaces can transform the look of any home or business. Our professional window cleaning and high-pressure washing services ensure a streak-free shine, removing dirt, grime, and hard water stains effortlessly.</p> 
              <p> Regular maintenance not only enhances the appearance of your property but also extends the lifespan of your windows and exterior surfaces. With eco-friendly products and expert techniques, we guarantee a sparkling finish every time!</p>
          </section>
          <section className="cta">
            <a href="/contact" className="button primary">Contact us</a>
            <a href="/gallery" className="button secondary">Go to Gallery</a>
          </section>
        </div>
        <div className="media">
          <img className="img" src="https://res.cloudinary.com/duis9nbgc/image/upload/v1741701628/correct_cleaning/c4pczdbak3kcxu5aselj.jpg" alt=""/>
        </div>
      </article>
      
      <ClientSection/>
    {/* <section className="feature_section">
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
    </section> */}
    {/* </div> */}
    </>

    );
}