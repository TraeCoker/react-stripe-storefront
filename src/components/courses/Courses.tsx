import { Checkout } from "../checkout/Checkout";
import { auth } from "../helpers/firebase";
import { HeaderData } from "../helpers/models";
import usePremiumStatus from "../../stripe/usePremiumStatus";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Navigate } from "react-router-dom";


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
