import React from "react";

export default function About(props) {
  return (
    <div
      id={props.id}
      className="container"
      style={{ marginTop: "56px", paddingTop: "56px" }}
    >
      <h1 className="text-center">About Me</h1>
      <p className="text-justify" style={{ width: "50%", margin: "0 auto" }}>
        I live and work near Cleveland, Ohio. At my day job, I develop WordPress
        websites and cross-platform mobile apps. I also freelance when I can,
        mostly building custom websites and apps that you can’t get from a
        template.
        <br />
        <br />
      </p>
      <p className="text-justify" style={{ width: "50%", margin: "0 auto" }}>
        My place in the world seems to be at the intersection of creativity and
        logic. All projects are a problem to be solved, whether it’s to do with
        design or code—only the tools change. My process is iterative; I
        approach each problem as a learning experience that informs the rest of
        the project, which means that I tend to not rely on full design mockups.
        Most of the time, I do a few sketches to flesh out a concept, and
        immediately dive into a working prototype that is much more flexible
        than jumping back and forth between code and Photoshop.
        <br />
        <br />
      </p>
      <p className="text-justify" style={{ width: "50%", margin: "0 auto" }}>
        My formal art and design training taught me to carefully consider my
        audience and what experience I intend for them to have through my work.
        Who is visiting your site? What are they looking for? How do they find
        it? What analytics are available to base our decisions on?
        <br />
        <br />
      </p>
      <p className="text-justify" style={{ width: "50%", margin: "0 auto" }}>
        While my focus is mobile-first responsive websites with HTML,
        JavaScript, SASS, PHP, and MySQL (often on top of WordPress or Drupal),
        I also do bash scripting and linux server administration. I’ve also
        worked with Java/Android Studio, Objective-C/Xcode, ActionScript3/Flash
        (and Haxe), and C#/Unity3D.
        <br />
        <br />
      </p>
      <p className="text-justify" style={{ width: "50%", margin: "0 auto" }}>
        I am always experimenting, always learning, and never bored.
      </p>
    </div>
  );
}
