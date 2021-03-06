import Footer from "../layout/Footer";



export const Courses: React.FC = ()=> {
  
  return( 
    <>
      <section className="section-courses-page">
        <div className="bg-video">
            <video  className="big-video__content" autoPlay muted loop>
              <source src="img/bg-video-1.mp4" type="video/mp4"/>
            </video>
        </div>

        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
                Thank you for subscribing!
            </h2>
            <div className="u-center-text u-margin-top-xl">
              <button className="btn btn--secondary">Start your next course</button>
            </div>
        </div>
        </section>
      <Footer />
    </>
  )

};
