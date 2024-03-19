function Header () {
    return (
        <div className="header">
            <div className="headerTitle">
                <a href="/"><p>Darlène Moundounga</p></a>
            </div>
            <nav className="headerSections">
                <a href="/#aboutMe"> A propos</a>
                <a href="/#skillsSection">Compétences</a>
                <a href="/#projectsSection">Projets</a>
                <a href="#contact">Contactez-moi</a>
            </nav>
        </div>
    )
}

export default Header