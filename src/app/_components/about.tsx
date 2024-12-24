// import React from "react";
// import "./about.css"; // Ensure this CSS file is correctly linked

// function About() {
//   return (
//     <div className="about-container">
//       <h1 className="about-title">Harikrishnan N</h1>
//       <div className="about-content">
//         <p className="about-stanza">
//           "Think Pythonic, build iconic", a full-stack pro,
//           <br />
//           From robust backends to frontends aglow.
//           <br />
//           With Django’s might and JavaScript’s flair,
//           <br />
//           Crafting solutions beyond compare.
//         </p>
//         <div className="hover-title">
//           <p>
//             Python Full-Stack Developer
//           </p>
//         <div className="flex justify-center items-center">
//           <img src="/svgs/notion-avatar-1734673253898.svg" alt="Notion Avatar" className="h-28 w-46" />
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;


import React from "react";
import "./about.css"; // Ensure this CSS file is correctly linked
import Company from "./company";
import Experience from "./experience";
import What_i_do from "./what_i_do";

function About() {
  return (
    <div className="flex">
      <div className="left-side flex items-center justify-center about-container">
        <h1 className="about-title">Harikrishnan</h1>
        <div className="about-content ">
          <p className="about-stanza">
            "Think Pythonic, build iconic", a full-stack pro,
            <br />
            From robust backends to frontends aglow.
            <br />
            With Django’s might and JavaScript’s flair,
            <br />
            Crafting solutions beyond compare.
          </p>
          <div className="hover-title">
            <p>
              Python Full-Stack Developer
            </p>
            <div className="flex justify-center items-center">
              <img src="/svgs/notion-avatar-1734673253898.svg" alt="Notion Avatar" className="h-28 w-46" />
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <What_i_do />
        <Experience />
      </div>
    </div>
  );
}

export default About;
