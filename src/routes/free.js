import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
// import free_audio from "../assets/audio/free.mp3";

const Free = () => {
  return (
    <div className="min-vh-100 bg-success min-vw-100 flex-column d-flex align-items-center justify-content-center">
      <div className="col-12 mb-5 text-center">
        <span className="display-1 text-white fw-bolder">شما بردید!</span>
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
