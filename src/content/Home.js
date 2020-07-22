import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile/othersandro.jpg";
import Social from "../components/Social";

function Home() {
  return (
    <div className="condiv home">
      <img src={profilepic} className="profilepic"></img>
      <ReactTypingEffect
        className="typingeffect"
        text={["I am Sandro Giannini Garcia", "I am a Software Engineer", "Computer Science Graduate", "Learner"]}
        speed={100}
        eraseDelay={150}
      />
      <Social />
    </div>
  );
}
export default Home;
