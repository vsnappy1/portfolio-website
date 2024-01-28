const IntroAndAbout = () => {
    return (
        <>
            <section className="hero-section page-section scroll-to-page" id="home">
                <div className="custom-container">
                    <div className="hero-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="las la-home"></i> Introduce
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">Hi from  
                                <span> Vishal</span>, Software Engineer II (Android)</h1>
                        </div>
                        <p className="scroll-animation" data-animation="fade_from_bottom">I code beautifully
                            simple things and i love what i do. Just simple like that!</p>
                        <a href="/#portfolio" className="go-to-project-btn scroll-to scroll-animation"
                            data-animation="rotate_up">
                            <img src="assets/images/round-text.png" alt="Rounded text"/>
                            <i className="las la-arrow-down"></i>
                        </a>

                        <div className="facts d-flex">
                            <div className="left scroll-animation" data-animation="fade_from_left">
                                <h1>5+</h1>
                                <p>Years of <br/>Experience</p>
                            </div>
                            <div className="right scroll-animation" data-animation="fade_from_right">
                                <h1>40+</h1>
                                <p>projects completed in <br/>2 countries</p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section className="about-area page-section scroll-to-page" id="about">
                <div className="custom-container">
                    <div className="about-content content-width">
                        <div className="section-header">
                            <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                <i className="lar la-user"></i> About
                            </h4>
                            <h1 className="scroll-animation" data-animation="fade_from_bottom">For every exceptional software, there lies a meticulously crafted <span>code tale</span></h1>
                        </div>
                        <p className="scroll-animation" style={{maxWidth: "none", textAlign: "justify"}} data-animation="fade_from_bottom">I am an experienced Android Engineer with around 5 years of experience in Banking, Ecommerce, Retail, and other industries. My expertise includes developing, testing, debugging, object-oriented programming, MVVM, MVI, Coroutines, RxAndroid, Jetpack Compose, RESTful API integration, strategic planning, and agile software development. I have a deep understanding of best practices and architecture principles, which enables me to create high-quality applications. Moreover, I have exceptional interpersonal communication skills along with strong problem-solving and analytical abilities. I pay close attention to detail and love when it comes to learning new technologies and development stacks. With a positive "can-do" mindset, I take responsibility for delivering results.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroAndAbout;