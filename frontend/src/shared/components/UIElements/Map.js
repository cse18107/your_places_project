import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {

  console.log(props.center);
  return (

    <div  className={`map ${props.className}`} style={props.style}>
      <iframe
        title="map"
        style={{"width":"100%","height":"100%"}}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457542085!2d2.2769955348978326!3d48.85894658071762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1641065432794!5m2!1sen!2sin"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
