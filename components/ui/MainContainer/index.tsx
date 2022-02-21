interface MainContainerProps {
    children?: React.ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => {
    return (
        <main className="h-screen bg-violet-800 text-white">{children}</main>
    );
};
