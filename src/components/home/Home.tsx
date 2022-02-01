import About from "./About";
import Features from "./Features";
import Header from "./Header";

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <About/>
                <Features />
            </main>
        </>
    )
};
