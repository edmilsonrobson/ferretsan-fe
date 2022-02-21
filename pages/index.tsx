import { signOut, useSession } from "next-auth/react";
import type { Session } from "next-auth";
import { useCallback } from "react";
import { CgPerformance } from "react-icons/cg";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/router";

import { Button } from "../components/ui/Button";
import { ConnectWithIntercomButton } from "../components/ConnectWithIntercomButton";
import { MainContainer } from "../components/ui/MainContainer";

const GuestView = () => (
    <>
        <p className="text-xl">
            <span className="text-4xl">👏</span> Welcome to FerretSan!
        </p>
        <p className="text-center">
            Connect with your Intercom account to start doing performance
            reviews.
        </p>

        <div className="mt-12">
            <ConnectWithIntercomButton />
        </div>
    </>
);

interface LoggedUserMessageProps {
    session: Session;
}

const LoggedUserView = ({ session }: LoggedUserMessageProps) => {
    const router = useRouter();
    const handleStartPerformanceReviewsClick = useCallback(() => {
        router.push("/start");
    }, [router]);
    if (!session.user) {
        return null;
    }
    const { image, name } = session.user;

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
                <span className="text-4xl">👩‍💻</span> welcome,{" "}
                <strong>{name}</strong>!
            </p>
            <p className="text-center">
                It&apos;s a pleasure to see you here today.
            </p>

            <div className="mt-12 text-center">
                <Button onClick={handleStartPerformanceReviewsClick}>
                    <CgPerformance size={30} />
                    Start Performance Reviews
                </Button>
                <button
                    role="button"
                    className="mt-12"
                    onClick={() => signOut()}
                >
                    Log out
                </button>
            </div>
        </>
    );
};

const Home = () => {
    const { data: session, status } = useSession();

    const isLoading = status === "loading";

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <TailSpin
                    height={100}
                    width={100}
                    color="#14b8a6" // refactor to constant from tailwind
                    ariaLabel="Loading"
                />
            </div>
        );
    }

    return (
        <div className="h-full flex items-center justify-center">
            <section className="flex flex-col justify-center items-center max-w-sm">
                {session ? <LoggedUserView session={session} /> : <GuestView />}
            </section>
        </div>
    );
};

export default Home;
