/* eslint-disable react-hooks/exhaustive-deps */

import { FOCUS } from "src/utils/common";
import { useEffect, useState } from "react";
import Body from "src/components/Body/Body";
import HeroSection from "src/components/HeroSection/HeroSection";

const App = (props) => {
  const { isMobile } = props;
  const [focus, setFocus] = useState(1);
  const [childFocus, setChildFocus] = useState(1);

  const moveFocus = (e) => {
    e?.preventDefault();
    if (isMobile) return;
    if (!e) {
      return;
    }
    const { keyCode } = e;

    switch (keyCode) {
      case 38:
        setFocus((focus) => {
          if (focus > 1) {
            return focus - 1;
          }
          return focus;
        });
        break; //up
      case 40:
        setFocus((focus) => {
          if (focus < 3) {
            return focus + 1;
          }
          return focus;
        });
        break; //down
      case 37:
        setChildFocus((childFocus) => {
          if (FOCUS[focus].hasChildren && childFocus > 1) {
            return childFocus - 1;
          }
          return childFocus;
        });
        break; //left
      case 39:
        setChildFocus((childFocus) => {
          if (
            FOCUS[focus].hasChildren &&
            childFocus < FOCUS[focus].child.length
          ) {
            return childFocus + 1;
          }
          return childFocus;
        });
        break; //right
      default:
    }
  };

  useEffect(() => {
    if(isMobile) return;
    document.addEventListener("keydown", moveFocus);
    moveFocus();
    return () => document.removeEventListener("keydown", moveFocus);
  }, [isMobile]);

  useEffect(() => {
    const id = `${FOCUS[focus - 1].uniqName}${focus}${childFocus}`;
    const ele = document.getElementById(id);
    ele?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  }, [childFocus]);

  const newProps = { focus, childFocus, ...props };

  return (
    <>
      <HeroSection {...newProps} />
      <Body {...newProps} />
    </>
  );
};

export default App;
