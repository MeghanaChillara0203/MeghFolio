import "./styles/Career.css";

const Academic = () => {
    return (
        <div className="career-section section-container">
            <div className="career-container">
                <h2>
                    Academic work <span>&</span>
                    <br /> leadership
                </h2>

                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Graduate Teaching Assistant</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2023–2024</h3>
                        </div>
                        <p>
                            Taught 200+ students how ML, stats, and data pipelines actually
                            work in practice. Turned theory into "oh, that's what the
                            assignment wants."
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Career Peer Advisor</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2024</h3>
                        </div>
                        <p>
                            Ran 50+ one-on-one coaching sessions on resumes, interview prep,
                            and job strategy. Led workshops on LinkedIn and behavioral
                            interviews because someone has to demystify that stuff.
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Student Ambassador</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2023–2024</h3>
                        </div>
                        <p>
                            Mentored 300+ data science students through onboarding, coursework
                            chaos, and career navigation. Built attendance tracking with
                            BigQuery and FastAPI because manual Excel is a crime.
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Founder &amp; President</h4>
                                <h5>Namaste — Indian Student Association</h5>
                            </div>
                            <h3>2023</h3>
                        </div>
                        <p>
                            Grew Northeastern's Indian Student Association from 15 to 50+
                            members in its first year. Built a cultural community from
                            scratch through events, festivals, and cross-group partnerships.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academic;