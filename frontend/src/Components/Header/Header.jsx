import aboutImage from '../../assets/aboutImage.webp'
function Header () {
    return (
        <header>
            <div className="headerTitle">
                <img src={aboutImage} alt="" /><a href="/">Darlène Moundounga</a>
            </div>
            <nav className="headerSections">
                <a href="/#aboutMe"> A propos</a>
                <a href="/#skillsSection">Compétences</a>
                <a href="/#projectsSection">Projets</a>
                <a href="#contact">Contactez-moi</a>
            </nav>
        </header>
    )
}

export default Header