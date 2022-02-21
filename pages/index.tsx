import { useCallback } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { FaIntercom } from "react-icons/fa";
import type { Session } from "next-auth";

const GuestMessage = () => (
    <>
        <p className="text-xl">👏 Welcome to FerretSan!</p>
        <p>Ready to get started doing Intercom performance reviews?</p>
    </>
);

interface LoggedUserMessageProps {
    session: Session;
}

const LoggedUserMessage = ({ session }: LoggedUserMessageProps) => {
    if (!session.user) {
        return null;
    }
    const { image } = session.user;

    return (
        <>
            <div className="flex justify-center">
                {image ? (
                    <img
                        src={image}
                        alt="your intercom avatar"
                        className="rounded-full mb-4"
                    />
                ) : null}
            </div>
            <p className="text-xl">
                👏 welcome, <strong>{session.user?.name}</strong>!
            </p>
            <p>Ready to get started doing Intercom performance reviews?</p>
        </>
    );
};

export const Home = () => {
    const { data: session } = useSession();

    const handleOnLoginWithIntercomClick = useCallback(() => {
        signIn("intercom");
    }, []);
    return (
        <main className="h-screen flex items-center justify-center bg-violet-800 text-white">
            <section className="flex flex-col justify-center items-center max-w-sm">
                <div className="mb-12">
                    {session ? (
                        <LoggedUserMessage session={session} />
                    ) : (
                        <GuestMessage />
                    )}
                </div>
                <button
                    role="button"
                    className="bg-teal-500 text-white px-2 py-2 rounded-lg flex items-center gap-2 hover:brightness-90 transition"
                    onClick={handleOnLoginWithIntercomClick}
                >
                    <FaIntercom size={30} />
                    Log in with Intercom
                </button>

                <button
                    role="button"
                    className="mt-12"
                    onClick={() => signOut()}
                >
                    Log out
                </button>
            </section>
        </main>
    );
};

export default Home;
