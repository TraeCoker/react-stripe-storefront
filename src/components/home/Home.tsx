import About from "./About";
import ContactContainer from "./ContactContainer";
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
                <ContactContainer />
            </main>
        </>
    )
};
