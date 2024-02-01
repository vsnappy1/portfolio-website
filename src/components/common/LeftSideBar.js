import SocialMenu from "./SocialMenu";

const LeftSideBar = () => {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                {/* <img src="assets/images/logo.png" alt="Logo"/> */}
                <h2>Vishal Kumar</h2>
                <span className="designation">Software Engineer II (Android)</span>
            </div>
            <img className="me" src="assets/images/me.jpeg" alt="Me"/>
            <h2 className="email">contact@vishalkumar.us</h2>
            <h2 className="address">Iselin, New Jersey</h2>
            <p className="copyright">&copy; {new Date().getFullYear()} Vishal Kumar. All Rights Reserved</p>
            <SocialMenu optionalClass="flex-wrap justify-content-center"/>
            <a href="mailto:contact@vishalkumar.us" className="theme-btn">
                <i className="las la-envelope"></i> Contact Me!
            </a>
        </div>
    );
}

export default LeftSideBar;