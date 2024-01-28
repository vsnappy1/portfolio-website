import LeftSideBar from "./common/LeftSideBar";
import SocialMenu from "./common/SocialMenu";
import Nav from "./common/Nav";

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
                        <Nav/>
                    </div>

                    <div className="sidebar-social">
                        <p>Social</p>
                        <SocialMenu/>
                    </div>
                </div>
            </div>

            <Nav/>

            <LeftSideBar/>
        </>
    );
}

export default Header;