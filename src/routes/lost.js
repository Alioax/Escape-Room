import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

import lost_audio from "../assets/audio/lost.mp3";
import lost_image from "../assets/images/Lost.jpg";

import Clear from "../components/clear storage";
import Background from "../components/background";

const Lost = () => {
  return (
    <div className="min-vh-100 bg-transparent min-vw-100 flex-column d-flex align-items-center justify-content-center">
      <Background src={lost_audio} alt={"tunnel"} />
      <Clear />
      <div className="col-12 mb-5 text-center">
        <span className="display-1 text-white fw-bolder">شما باختید!</span>
      </div>
      <div className="col-12 text-center">
        <audio controls autoplay>
          <source src={lost_audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default withRouter(Lost);
