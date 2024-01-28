import RecommendationItem from "./RecommendationItem";

const Recommendations = () => {
    return (
        <section className="testimonial-area page-section scroll-to-page" id="recommendations">
            <div className="custom-container">
                <div className="testimonial-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-comment"></i> recommendations
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Recommendations</span></h1>
                    </div>

                    <div className="testimonial-slider-wrap scroll-animation" data-animation="fade_from_bottom">
                        <div className="owl-carousel testimonial-slider owl-theme">
                            <RecommendationItem name="Amgad Armanus" company="Capital One" designation="Engineering Manager" recommendation="I have had the privilege of working closely with Vishal at TIAA is an outstanding Senior Android engineer who consistently demonstrates exceptional qualities that make him a true asset to any team. Vishal is not only highly skilled in Android development but also incredibly responsible and communicative. He takes ownership of projects with a level of dedication that is second to none. Deadlines are never an issue because he meticulously plans and executes tasks with precision. Moreover, Vishal has a remarkable ability to translate complex technical concepts into clear and understandable language. He did so with many projects including the adoption of Jetpack Compose, View Binding migration, and innovative CI/CD pipeline updates. His communication skills make him not only a top-tier developer but also a valuable team player. Vishal is always ready to share insights, collaborate, and assist team members, making him an approachable and effective mentor to many of the team members."/>
                            <RecommendationItem name="Hassan Raza" company="Amazon" designation="Software Development Engineer II" recommendation="Vishal's discipline and work ethic are exceptional, setting a standard of excellence in everything he undertakes. His foundation in computer science is solid, characterized by a deep understanding of complex problems and design patterns. Vishal is particularly distinguished in Android and mobile technology, demonstrating expert knowledge and innovative solutions in this domain. What truly sets Vishal apart is his relentless curiosity about new technologies. He continuously integrates cutting-edge tools and methods into both personal and professional projects, enhancing efficiency and effectiveness. Vishal's presence in any team is an asset. His technical skills, combined with his ability to collaborate and lead, make him an invaluable team member and a natural mentor. Vishal represents the best of the best in his field, and I wholeheartedly endorse him for any role that leverages his exceptional skills and knowledge."/>
                            <RecommendationItem name="Suzana Gehad" company="MIU" designation="Software Engineer" recommendation="Vishal is an exceptionally intelligent and diligent software developer. Together, we worked on a project, and because of his vast knowledge, he gave me a lot of advice and support. He is one of the smartest and most brilliant people I have ever encountered."/>
                            <RecommendationItem name="Kidus Kebede" company="Frost" designation="Sr. Enterprise Security Engineer" recommendation="He has strong team work mentality, solid UML design understanding and problem solving skills. Implementation wise, he is full stack developer especially Java and spring boot framework."/>
                        </div>
                        <div className="testimonial-footer-nav">
                            <div className="testimonial-nav d-flex align-items-center">
                                <button className="prev"><i className="las la-angle-left"></i></button>
                                <div id="testimonial-slide-count"></div>
                                <button className="next"><i className="las la-angle-right"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="clients-logos">
                        <h4 className="scroll-animation" data-animation="fade_from_bottom">work with 4+ companies
                            worldwide</h4>
                        <div className="row align-items-center">
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                <img src="assets/images/clients/tia.svg" alt="Client"/>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                <img src="assets/images/clients/dawaai.png" alt="Client"/>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                <img src="assets/images/clients/cee.png" alt="Client"/>
                            </div>
                            <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                <img src="assets/images/clients/fiverr.svg" alt="Client"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Recommendations;