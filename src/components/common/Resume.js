const Resume = () => {
    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-briefcase"></i> Resume
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Experience</span></h1>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">June, 2023 - Present</span>
                            <h2>Software Engineer II (Android)</h2>
                            <p>
                                <b>TIAA - Iselin, NJ, USA (Consulting role through Photon Infotech) </b>
                                <ul className="experienceBullets">
                                    <li>Participated in Modularization initiatives to enhance manageability and scalability by dividing a single module into multiple modules. </li>
                                    <li>Led the integration of Jetpack Compose, designed the core architecture to simplify component development, and ensured that each component followed predefined standards.</li>
                                    <li>Reviewed code, mentored juniors, held sessions to share coding standards and knowledge about latest technologies.</li>
                                    <li>Successfully transitioned an entire project from Kotlin synthetic to ViewBinding, along with upgrading Gradle, JDK, and various dependencies. This optimization led to a remarkable 50% reduction in app build times and trimmed down Jenkins Pipeline execution by 40 minutes.</li>
                                    <li>Resolved security related issues (vulnerabilities) and upgraded the legacy codebase for both improved performance and security. Made on boarding documents easier to understand, so new people can learn how to get started in a shorter amount of time, from weeks to just a matter of days.</li>
                                </ul>
                            </p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <span className="date">2018 - 2022</span>
                            <h2>Android Developer</h2>
                            <p>
                                <b>Dawaai.pk - Karachi, Sindh, Pakistan</b>
                                <ul className="experienceBullets">
                                    <li>Managed and improved the Dawaai.pk consumer application and other products of the company by refactoring the legacy code to follow the best practices and latest architecture.</li>
                                    <li>Developed Rider application from scratch using compose, Kotlin, MVVM, and best practices to create a seamless and efficient experience for users.</li>
                                    <li>Implemented event tracking tools such as Mix Panel, Apps Flyer, and UX Cam to provide detailed insights into user behavior and enable data-driven decision making.</li>
                                    <li>Collaborated closely with the back-end team to seamlessly integrate Web APIs, manage releases, distribute apps, and review Firebase Crashlytics to ensure optimal app performance.</li>
                                    <li>Built centralized communication server using AWS and Python so that all communication happens through a central point.</li>
                                </ul>
                            </p>
                            <h2>Android Developer</h2>
                            <p>
                                <b>Cee Solutions - Karachi, Sindh, Pakistan  </b>
                                <ul className="experienceBullets">
                                    <li>Managed and improved existing apps as well as developed new apps in alignment with client needs.</li>
                                    <li>Fixed 20+ crashing issues and 40+ bugs in addition to improving security and integrating NPC in Samba Smart Android (Bank) app.</li>
                                    <li>Developed 4 new apps from scratch (Snap Delivery, Observer, Cloud Research, and E-warranty) – applying best practices.</li>
                                    <li>Developed Snap Delivery server on Spring Boot and App on Kotlin from scratch, which is now a stable startup in Pakistan.</li>
                                    <li>Developed utility software using java FX to reduce the UAT to Production time from hours to minutes.</li>
                                </ul>
                            </p>
                            <h2>Mobile Developer</h2>
                            <p>
                                <b>Fiverr - Freelance</b>
                                <ul className="experienceBullets">
                                    <li>Achieved Level I Seller status by successfully completing 40+ freelance projects.</li>
                                    <li>Developed food delivery, chat bot, supplier app, FYPs, games, and more on GitHub.</li>
                                    <li>Published 2 applications on Play Store.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="resume-content content-width" style={{marginTop: 20}}>
                    <div className="section-header">
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Education</span></h1>
                    </div>

                    <div className="resume-timeline">
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <h2>Master's in Computer Science (2024) - 3.95 CGPA</h2>
                            <p>
                                <b>Maharishi International University</b><br/>
                                <b>Key Courses:</b> Software Architecture, Cloud Computing, Advance Software Development, Algorithms
                            </p>
                        </div>
                        <div className="item scroll-animation" data-animation="fade_from_right">
                            <h2>Bachelor's in Computer Science (2020)  - 3.73 CGPA (🥉 Bronze medalist )</h2>
                            <p>
                                <b>University of Karachi</b><br/>
                                <b>Key Courses:</b> Software Architecture, Cloud Computing, Advance Software Development, Algorithms
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;