import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

// import free_audio from "../assets/audio/free.mp3";
import free_image from "../assets/images/Free.jpg";

import Clear from "../components/clear storage";
import Background from "../components/background";
const Free = () => {
  return (
    <div className="vh-100 bg-transparent vw-100 flex-column d-flex align-items-center justify-content-center">
      <Background src={free_image} alt={"metro"} />
      <Clear />
      <div className="col-12 mb-5 text-center">
        <span className="display-1 text-success fw-bolder">شما بردید!</span>
      </div>
      <div className="col-12 text-center">
        {/* <audio controls autoplay>
          <source src={free_audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
      </div>
    </div>
  );
};

export default withRouter(Free);
