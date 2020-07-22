import React from "react";
import Widecardskills from "../components/Widecardskills";

function SkillsList(props) {
  const skillList = props.skills;
  const skillCategory = props.category;

  return (
    <div className="box">
      <h3>{skillCategory}</h3>
      <hr></hr>
      <ul>
        {skillList.map((value) => {
          return <Widecardskills skill={value} />;
        })}
      </ul>
    </div>
  );
}
export default SkillsList;
