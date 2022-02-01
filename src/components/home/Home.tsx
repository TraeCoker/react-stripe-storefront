import About from "./About";
import ContactForm from "./ContactForm";
import CoursesContainer from "./CoursesContainer";
import FeaturesContainer from "./FeaturesContainer";
import Header from "./Header";
import ReviewsContainer from "./ReviewsContainer";


export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <About/>
                <FeaturesContainer />
                <CoursesContainer />
                <ReviewsContainer />
                <ContactForm />
            </main>
        </>
    )
};
