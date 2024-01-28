const SocialMenu = (props) => {

    const {optionalClass} = props;
    
    return (
        <ul className={`social-profile d-flex align-items-center ${optionalClass && optionalClass}`}>
            <li>
                <a href="https://www.linkedin.com/in/vishalkumarmotwani/"><i className="lab la-linkedin"></i></a>
            </li>
            <li>
                <a href="https://github.com/vsnappy1"><i className="lab la-github"></i></a>
            </li>
        </ul>
    );
}

export default SocialMenu;