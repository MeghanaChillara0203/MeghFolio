import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        {/* Replaced entire paragraph with your actual profile narrative */}
        <p className="para">
          I build the projects that turns "cool idea" into "ship it Monday" — ML models, data pipelines, production APIs, the works.
          Data scientist by training, full-stack by necessity, caffeinated by choice.
        </p>
      </div>
    </div>
  );
};

export default About;