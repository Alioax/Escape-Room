import { useEffect } from "react";

const Free = () => {
  useEffect(() => {
    localStorage.setItem("haveWon", true);
  });
  return <p className="text-white">Win</p>;
};

export default Free;
