import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>

            {/* Replaced name */}
            <h1>
              MEGHANA
              <br />
              <span>CHILLARA</span>
            </h1>
          </div>

          <div className="landing-info">
            {/* Replaced role line */}
            <h3>Data Scientist &</h3>

            {/* Replaced animated titles (kept same structure for animation) */}
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI / ML</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>

            <h2>
              <div className="landing-h2-info">Software</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>

        {children}
      </div>
    </>
  );
};

export default Landing;