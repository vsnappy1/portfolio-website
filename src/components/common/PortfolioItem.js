const PortfolioItem = (props) => {
    
    const {name, imageUrl, categories, fullWidth} = props;
    const isInvalid = (name==="" && imageUrl==="" && categories==="") || (!name && !imageUrl && !categories)
    const categoriesArr = categories?.trim().split(",");

    return ( (!isInvalid) ?
        <div className={fullWidth ? "col-md-12 scroll-animation" : "col-md-6 scroll-animation"} data-animation="fade_from_left">
            <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                    <a href={imageUrl} data-lightbox="example-1">
                        <img src={imageUrl} alt={name}/>
                    </a>

                    <img src={imageUrl} alt={name}/>

                    <ul className="portfolio-categories">
                        {categoriesArr?.map(
                            (item, key) => <li key={key}>
                                <a href="/#">{item}</a>
                            </li>
                        )}
                    </ul>
                </div>
                <h2><a href="/#">{name}</a></h2>
            </div>
        </div>
        :
        <></>
    );
}

export default PortfolioItem;