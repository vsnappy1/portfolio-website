import LeftSideBar from "./common/LeftSideBar";

const Header = () => {
    return (
        <>
            <video className="body-overlay" muted autoPlay loop>
                <source src="assets/images/video1.mp4" type="video/mp4"/>
            </video>

            <div className="page-loader">
                <div className="bounceball"></div>
            </div>

            <span className="icon-menu">
                <span className="bar"></span>
                <span className="bar"></span>
            </span>

            <div className="responsive-sidebar-menu">
                <div className="overlay"></div>
                <div className="sidebar-menu-inner">
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex">
                            <li>
                                <a className="scroll-to" href="/#home">
                                    <i className="las la-home"></i> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#about">
                                    <i className="lar la-user"></i> <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#resume">
                                    <i className="las la-briefcase"></i> <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#services">
                                    <i className="las la-stream"></i> <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#skills">
                                    <i className="las la-shapes"></i> <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#portfolio">
                                    <i className="las la-grip-vertical"></i> <span>Portfolios</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#recommendations">
                                    <i className="lar la-comment"></i> <span>Recommendations</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="/#contact">
                                    <i className="las la-envelope"></i> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-social">
                        <p>Social</p>
                        <ul className="social-links d-flex align-items-center">
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
                    </div>
                </div>
            </div>

            <ul className="menu scroll-nav d-flex">
                <li>
                    <a className="scroll-to" href="/#home">
                        <span>Home</span> <i className="las la-home"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#about">
                        <span>About</span> <i className="lar la-user"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#resume">
                        <span>Resume</span> <i className="las la-briefcase"></i>
                    </a>
                </li>
                <li>
                    <a href="/#services">
                        <span>Services</span> <i className="las la-stream"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#skills">
                        <span>Skills</span> <i className="las la-shapes"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#portfolio">
                        <span>Portfolios</span> <i className="las la-grip-vertical"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#recommendations">
                        <span>Recommendations</span> <i className="lar la-comment"></i>
                    </a>
                </li>
                <li>
                    <a className="scroll-to" href="/#contact">
                        <span>Contact</span> <i className="las la-envelope"></i>
                    </a>
                </li>
            </ul>

            <LeftSideBar/>
        </>
    );
}

export default Header;