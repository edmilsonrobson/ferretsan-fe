import { TailSpin } from "react-loader-spinner";

interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    isLoading?: boolean;
}

export const Button = ({ children, onClick, isLoading }: ButtonProps) => {
    return (
        <button
            role="button"
            disabled={isLoading}
            className="bg-teal-500 text-white px-3 py-2 rounded-lg flex justify-center items-center gap-2 hover:brightness-90 transition min-w-min disabled:cursor-not-allowed"
            onClick={onClick}
        >
            {isLoading ? (
                <TailSpin
                    width={40}
                    height={40}
                    color="white"
                    ariaLabel="Loading Intercom authentication"
                />
            ) : (
                children
            )}
        </button>
    );
};
