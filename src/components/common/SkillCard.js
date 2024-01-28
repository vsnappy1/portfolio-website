const SkillCard = (props) => {

    const {skillName} = props;
    
    return (
        <div className="scroll-animation" data-animation="fade_from_left">
            <div className="skillCard">
                {skillName}
            </div>
        </div>
    );
}

export default SkillCard;