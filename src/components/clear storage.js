import { useEffect, useState } from "react";

const Clear = () => {
  const [isClear_1, setClear_1] = useState(false);
  const [isClear_2, setClear_2] = useState(false);
  const [isClear_3, setClear_3] = useState(false);
  const [isClear_4, setClear_4] = useState(false);

  const [toggle, setToggle] = useState(false);

  const clear = isClear_1 && isClear_2 && isClear_3 && isClear_4;

  useEffect(() => {
    if (clear) {
      localStorage.removeItem("haveWon");
    }
  }, [clear]);

  return (
    <>
      <button
        onClick={() => setClear_1(true)}
        className=" clear-button btn btn-lg w-h-64 position-fixed top-0 start-0 "
      ></button>
      <button
        onClick={() => setClear_2(true)}
        className=" clear-button btn btn-lg w-h-64 position-fixed bottom-0 start-0 "
      ></button>
      <button
        onClick={() => setClear_3(true)}
        className=" clear-button btn btn-lg w-h-64 position-fixed top-0 end-0 "
      ></button>
      <button
        onClick={() => setClear_4(true)}
        className=" clear-button btn btn-lg w-h-64 position-fixed bottom-0 end-0 "
      ></button>
    </>
  );
};

export default Clear;
