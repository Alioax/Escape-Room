import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

const Lost = () => {
  return (
    <div className="min-vh-100 bg-danger min-vw-100 d-flex align-items-center justify-content-center">
      <span className="display-1 text-white fw-bolder">شما باختید!</span>
    </div>
  );
};

export default withRouter(Lost);
