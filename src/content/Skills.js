import React from "react";
import SkillsList from "../components/SkillsList";

function Skills() {
  const resume = require("../data/resume.json");

  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>
      <br></br>
      <br></br>
      <div className="box-container">
        <SkillsList
          skills={resume["Programming Lenguages"]}
          category="Lenguages"
        />
        <SkillsList skills={resume.Others} category="Others" />
        <SkillsList skills={resume.Tools} category="Tools" />
        <SkillsList skills={resume.Database} category="Database" />
        <SkillsList skills={resume.Methodologies} category="Methodologies" />
        <SkillsList
          skills={resume["Spoken Lenguages"]}
          category="Spoken Lenguages"
        />
      </div>
    </div>
  );
}
export default Skills;
