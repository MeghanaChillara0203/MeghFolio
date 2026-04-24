import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist</h4>
                <h5>Redprint</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Cut ops planning time 60% with forecasting models across 50+ gym
              locations. Shipped a RAG-powered GenAI chatbot that killed 40% of
              support tickets, and kept the whole thing at 90%+ uptime on AWS.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Intern</h4>
                <h5>Parrots Inc</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Trained an XGBoost model on Apple Watch data that delivered
              real-time health alerts at 89% accuracy in under 500ms. Shipped
              it straight into iOS via Swift and HealthKit, for Alzheimer's
              patients who actually needed it.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>T2D2</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Bumped façade defect detection from 74% to 89% with YOLOv8 and
              Detectron2. Then automated the reporting pipeline with OpenAI,
              cutting documentation effort by 90% and shipping reports twice
              as fast.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>ValueLabs</h5>
              </div>
              <h3>2020–2022</h3>
            </div>
            <p>
              Migrated 100+ ETL jobs to Airflow and Redshift for 40% faster
              nightly runs. Built predictive SQL models that cut SLA breaches
              35%, and mentored 15+ engineers into shipping on time.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>ValueLabs</h5>
              </div>
              <h3>2019–2020</h3>
            </div>
            <p>
              Built internal tools and backend systems while learning how
              production software actually ships. The messy real version, not
              the textbook one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;