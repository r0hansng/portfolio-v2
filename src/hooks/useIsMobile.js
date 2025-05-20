import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateMobileStatus = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's sm breakpoint
        };

        updateMobileStatus();
        window.addEventListener("resize", updateMobileStatus);

        return () => window.removeEventListener("resize", updateMobileStatus);
    }, []);

    return isMobile;
};
