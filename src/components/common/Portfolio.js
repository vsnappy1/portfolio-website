import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-grip-vertical"></i> portfolio
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom"><span>Projects</span></h1>
                    </div>

                    <div className="row portfolio-items">
                        <PortfolioItem name="Dawaai - Medicine & Healthcare" imageUrl="assets/images/portfolio/dawaii.jpg" categories="Android,Healthcare,Medicine" fullWidth={true}/>
                        <PortfolioItem name="SnappRetail" imageUrl="assets/images/portfolio/snapretail.jpg" categories="Android,Retail" fullWidth={true}/>
                        <PortfolioItem name="SambaSmart" imageUrl="assets/images/portfolio/samba.jpg" categories="Android,Banking"/>
                        <PortfolioItem name="FoodiePal" imageUrl="assets/images/portfolio/foodiepal.jpg" categories="Android,Food,Recipe"/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Portfolio;