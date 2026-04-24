import "./styles/Career.css";

const Awards = () => {
    return (
        <div className="career-section section-container">
            <div className="career-container">
                <h2>
                    Awards <span>&</span>
                    <br /> recognition
                </h2>

                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Dr. Bruce Maxwell Award for Learner Service</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2024</h3>
                        </div>
                        <p>
                            Recognized for leadership and building community at Roux: founding
                            the Indian Student Organization, mentoring peers as TA and RA, and
                            guiding incoming students through the grad school transition.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;