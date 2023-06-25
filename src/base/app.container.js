import React, { useEffect, useState } from "react";
import App from "./App";

const AppContainer = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    resize();
    window.addEventListener("resize", resize);
  });
  
  const newProps = { isMobile, ...props };
  return <App {...newProps} />;
};

export default AppContainer;
