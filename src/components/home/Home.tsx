import About from "./About";
import Header from "./Header";

export const Home: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <About/>
            </main>
        </>
    )
};
