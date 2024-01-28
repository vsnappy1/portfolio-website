const RecommendationItem = (props) => {
    const {name, company, designation, recommendation} = props;
    return (
        <div className="testimonial-item">
            <div className="testimonial-item-inner">
                <div className="author d-flex align-items-center">
                    <div className="right">
                        <h3>{name}</h3>
                        <p className="designation">{designation} - <span>{company}</span></p>
                    </div>
                </div>
                <p><i>“{recommendation}”</i></p>

                <a href="/#" className="project-btn">Project</a>
            </div>
        </div>
    );
}

export default RecommendationItem;