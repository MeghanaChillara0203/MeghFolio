import "./styles/Career.css";

const Research = () => {
    return (
        <div className="career-section section-container">
            <div className="career-container">
                <h2>
                    My <span>research</span>
                    <br /> contributions
                </h2>

                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>NOISe: Nuclei-Aware Osteoclast Instance Segmentation</h4>
                                <h5>IEEE Publication</h5>
                            </div>
                            <h3>2024</h3>
                        </div>
                        <p>
                            Co-authored published research that pushed mouse-to-human domain
                            transfer from 0.60 to 0.82 mAP@0.5. Built the weakly-supervised
                            nuclei dataset and benchmarked YOLOv8 against Faster R-CNN.
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Graduate Research Assistant</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2023–2024</h3>
                        </div>
                        <p>
                            Modeled dynamic brain networks with graph analytics in R and
                            NetworkX. Cut simulation runtime by 50%, enabling faster seizure
                            pattern analysis on complex temporal data.
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Clustering in Dynamic Networks</h4>
                                <h5>Northeastern University</h5>
                            </div>
                            <h3>2023</h3>
                        </div>
                        <p>
                            Developed clustering techniques for dynamic networks that
                            uncovered insights in brain simulations and seizure data.
                            Presented at student showcases on network percolation and vertex
                            connectivity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Research;