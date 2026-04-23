import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        {/* Replaced entire paragraph with your actual profile narrative */}
        <p className="para">
          Driven by curiosity and fueled by innovation, I specialize in building
          AI and data-driven systems that bridge technical depth with real-world
          impact. My experience spans machine learning, full-stack development,
          and data engineering, where I’ve worked on everything from healthcare
          AI and computer vision to scalable analytics platforms.

          I enjoy solving complex problems end-to-end — from designing models and
          pipelines to deploying production-ready applications. Whether it's
          developing intelligent systems, building APIs, or creating data
          products, I focus on delivering solutions that are efficient,
          scalable, and meaningful.
        </p>
      </div>
    </div>
  );
};

export default About;