const Nav = () => {
    
    return (
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
    );
}

export default Nav;