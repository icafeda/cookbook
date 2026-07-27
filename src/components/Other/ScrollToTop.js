import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ScrollToStop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    
    return null;
}

export default ScrollToStop
