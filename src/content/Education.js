import React from "react";
import Widecard from "../components/Widecardedu";

function Education() {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Education</h1>
      <Widecard
        title="B.A in Computer Science"
        where="Rollins College"
        from="January 2018"
        to="May 2020"
        gpa="3.40"
      />
      <Widecard
        title="A.S in General Education"
        where="Valencia College"
        from="July 2013"
        to="December 2017"
        gpa="3.23"
      />
    </div>
  );
}
export default Education;
