import React from "react";
import Social from "../components/Social";

function Contact() {
  return (
    <div className="condiv">
      <h1 className="subtopic">Contact Me</h1>
      
      <br></br>
      <p>Send me an email </p>
      <a href = "mailto: sgianninigarcia@rollins.edu">
      <h3 style={{color: "black"}}>sgianninigarcia@rollins.edu</h3>
        </a>
        <br></br>
        <p>Or give me a call </p>
      <h3>+1 (321) 9458840</h3>
      <br></br>
      <p>Please do not hesitate to contact me. </p>
      <Social />
    </div>
  );
}
export default Contact;
