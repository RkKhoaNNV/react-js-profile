import React from "react";

export const IntroInfo = () => {
  return (
    <>
      <p>
        Engineering Degree of Software Engineering in Information Technology, Da
        Nang University of Technologies, Da Nang city <br />
        - Good skill with almost 3 years experiences in react development <br />
        - Good information Technology background knowledge <br />
        - Learning new knowledge quickly, working well under pressure <br />
        - Good individual working as well as team working <br />
        - Have experiences as tester and bug analyze <br />
        - Good learning and working attitude, professionalism and high sense of
        responsibility
        <br />
        - Study and flowing new project quickly
        <br />
        - Basic knowledge some language: Javascript, HTML, CSS, Bootstrap...{" "}
        <br />
        "I write code, love code, live code."
      </p>
    </>
  );
};
export const AboutInfo = () => {
  const style = {
    textDecoration: "underline",
    fontWeight: "800",
    color: "rgb(255, 245, 232)",
  };
  return (
    <>
      <p>
        I am Programming enthusiast and fullstack Web developer.
        <br />
        <br />
        Currently pursuing my BTech (Engineering) degree in IT and honestly
        engineering is fun 😅.
        {/* <br />I also run NEWS media company{" "}
        <a
          href="https://www.eternalmac.com"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          Eternalmac.com
        </a>{" "}
        Where we post all tech news for techies. */}
        <br />
        <br />I love exploring different kind of fields and I do 3d-designing
        and animations in Blender. And I have few good{" "}
        <a
          href="https://www.artstation.com/codersground404"
          target="_blank"
          style={style}
          rel="noreferrer"
        >
          projects on Artstation
        </a>{" "}
        too. Definitely check those out.
        <br />
        <br />
        At last, Feel free to{" "}
        <a href="/contact" style={style}>
          Contact ME.
        </a>{" "}
        We can listen to good POP music together 🎧.
      </p>
    </>
  );
};
