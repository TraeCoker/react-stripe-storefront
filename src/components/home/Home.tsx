import About from "./About";
import Courses from "./Courses";
import Features from "./Features";
import Header from "./Header";

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <About/>
                <Features />
                <Courses />
            </main>
        </>
    )
};
