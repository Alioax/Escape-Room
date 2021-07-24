import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

const Free = () => {
  return (
    <div className="min-vh-100 bg-success min-vw-100 d-flex align-items-center justify-content-center">
      <span className="display-1 text-white fw-bolder">شما بردید!</span>
    </div>
  );
};

export default withRouter(Free);
