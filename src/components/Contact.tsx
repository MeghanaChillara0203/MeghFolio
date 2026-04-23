import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>

            {/* Add Email as primary contact (MOST important change) */}
            <p>
              <a
                href="mailto:meghchillara@gmail.com"
                data-cursor="disable"
              >
                Email — meghchillara@gmail.com
              </a>
            </p>

            {/* Replace LinkedIn with your profile */}
            <p>
              <a
                href="https://www.linkedin.com/in/meghana-chillara/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — meghana-chillara
              </a>
            </p>

            <h4>Education</h4>

            {/* Replace education with your actual background */}
            <p>
              Master’s in Data Science, Northeastern University — 2022–2024
            </p>
            <p>
              Bachelor’s in Computer Science, Jawaharlal Nehru Technological University — 2016–2020
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            {/* Replace GitHub */}
            <a
              href="https://github.com/MeghanaChillara0203"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            {/* Replace LinkedIn */}
            <a
              href="https://www.linkedin.com/in/meghana-chillara/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            {/* Remove irrelevant YouTube/Instagram → replaced with Portfolio */}
            <a
              href="https://meghanachillara.com/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Portfolio <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Meghana Chillara</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;