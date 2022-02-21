import { useCallback } from "react";
import { FaIntercom } from "react-icons/fa";

export const Home = () => {
    const handleOnLoginWithIntercomClick = useCallback(() => {}, []);
    return (
        <main className="h-screen flex items-center justify-center bg-violet-800 text-white">
            <section className="flex flex-col justify-center items-center max-w-sm">
                <div className="mb-12">
                    <p className="text-xl">👏 Welcome to FerretSan!</p>
                    <p>
                        Ready to get started doing Intercom performance reviews?
                    </p>
                </div>
                <button
                    className="bg-teal-500 text-white px-2 py-2 rounded-lg flex items-center gap-2 hover:brightness-90 transition"
                    onClick={handleOnLoginWithIntercomClick}
                >
                    <FaIntercom size={30} />
                    Log in with Intercom
                </button>
            </section>
        </main>
    );
};

export default Home;
