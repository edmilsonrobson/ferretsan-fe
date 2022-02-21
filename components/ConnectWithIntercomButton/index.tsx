import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FaIntercom } from "react-icons/fa";
import { Button } from "../ui/Button";

export const ConnectWithIntercomButton = () => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const handleOnLoginWithIntercomClick = useCallback(() => {
        signIn("intercom");
        setIsButtonLoading(true);
    }, []);

    return (
        <Button
            onClick={handleOnLoginWithIntercomClick}
            isLoading={isButtonLoading}
        >
            <FaIntercom size={30} />
            Connect with Intercom
        </Button>
    );
};
