import { HeaderData } from "../helpers/models";
import About from "./About";
import ContactForm from "./ContactForm";
import CoursesContainer from "./CoursesContainer";
import FeaturesContainer from "./FeaturesContainer";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import ReviewsContainer from "./ReviewsContainer";


export const Home: React.FC = () => {
    const headerData: HeaderData = {
        mainHeading: "THE SOURCE",
        subHeading: "return to",
        page: "home",
        buttonText: "Find your calling"
    }
    return (
        <>
            <Header {...headerData} />
            <main>
                <About/>
                <FeaturesContainer />
                <CoursesContainer />
                <ReviewsContainer />
                <ContactForm />
            </main>
            <Footer />
        </>
    )
};
