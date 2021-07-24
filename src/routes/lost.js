import { useEffect } from "react";

const Lost = () => {
  useEffect(() => {
    localStorage.setItem("haveWon", false);
  });
  return <p className="text-white">Lost</p>;
};

export default Lost;
