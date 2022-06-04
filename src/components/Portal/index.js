import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";

const parent = document.getElementById("modal");

const Portal = ({ children }) => {
  const el = useMemo(() => document.createElement("div"), []);
  console.log("el: ", el);
  console.log("parent: ", parent);
  useEffect(() => {
    parent.appendChild(el);
    return () => parent.removeChild(el);
  }, []);
  return ReactDOM.createPortal(children, el);
};

export default Portal;
