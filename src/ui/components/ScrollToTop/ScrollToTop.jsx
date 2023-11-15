import { useEffect } from "react";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
