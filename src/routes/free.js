import { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";

// import free_audio from "../assets/audio/free.mp3";
import free_image from "../assets/images/Free.jpg";

import Clear from "../components/clear storage";
import Background from "../components/background";
const Free = () => {
  return (
    <>
      <Background src={free_image} alt={"metro"} />
      <Clear />
      <div className="min-vh-100 align-items-center row">
        <div className="col-12 mb-5 text-center">
          <span className="display-1 text-danger fw-bolder">شما بردید!</span>
        </div>
        <div className="col-12 text-center">
          {/* <audio controls autoplay>
          <source src={free_audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio> */}
        </div>
        <div className="col-12 text-white ">
          <div className="bg-dark rounded-3 p-4">
            <h2 className="fw-bolder border-bottom pb-2 mb-2">سناریو بازی</h2>
            <p className="fw-lighter mb-0">
              شما و تعدادی از دوستانتات در باری مشغول قمار هستید که متوجه یک در
              غیرعادی می شوید. پس از طی تعدادی راهرو متوجه تشکیلات باند مواد
              مخدر می شوید و سعی می کنید که از آنجا خارج شوید اما به دلیل باخبر
              شدن رئيس باند از حضورتان، شما با قمار اخر سرونشتتون رو مشخص می
              کنید.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Free);
