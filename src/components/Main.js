import LeftSideBar from "./common/LeftSideBar";
import Contact from "./common/Contact";
import Resume from "./common/Resume";
import Skills from "./common/Skills";
import IntroAndAbout from "./common/IntroAndAbout";
import Portfolio from "./common/Portfolio";
import Recommendations from "./common/Recommendations";

const Main = () => {
    return (
        <>
            <main className="drake-main">
                <div id="smooth-wrapper">
                    <div id="smooth-content">

                        <LeftSideBar/>

                        <IntroAndAbout/>

                        <Resume/>

                        <Skills/>

                        <Portfolio/>

                        <Recommendations/>

                        <Contact/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;