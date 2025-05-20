import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export const useScrollToElement = () => {
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const scrollTo = searchParams.get("scrollTo");

        if (scrollTo) {
            scroller.scrollTo(scrollTo, {
                duration: 800,
                delay: 10,
            });
        }
    }, [location]);
};
