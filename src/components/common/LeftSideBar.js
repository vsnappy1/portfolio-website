const LeftSideBar = () => {
    return (
        <div className="left-sidebar">
            <div className="sidebar-header d-flex align-items-center justify-content-between">
                {/* <img src="assets/images/logo.png" alt="Logo"/> */}
                <h2>Vishal Kumar</h2>
                <span className="designation">Software Engineer</span>
            </div>
            <img className="me" src="assets/images/me.jpeg" alt="Me"/>
            <h2 className="email">contact@vishalkumar.us</h2>
            <h2 className="address">Iselin, New Jersey</h2>
            <p className="copyright">&copy; {new Date().getFullYear()} Vishal Kumar. All Rights Reserved</p>
            <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                <li>
                    <a href="https://www.linkedin.com/in/vishalkumarmotwani/"><i className="lab la-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/vsnappy1"><i className="lab la-github"></i></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/vishalkumarmotwani"><i className="lab la-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/vishal_kumaaar/"><i className="lab la-instagram"></i></a>
                </li>
            </ul>
            <a href="mailto:contact@vishalkumar.us" className="theme-btn">
                <i className="las la-envelope"></i> Hire Me!
            </a>
        </div>
    );
}

export default LeftSideBar;