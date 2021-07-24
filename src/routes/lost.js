import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import lost_audio from "../assets/audio/lost.mp3";

const Lost = () => {
  return (
    <div className="min-vh-100 bg-danger min-vw-100 flex-column d-flex align-items-center justify-content-center">
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
