import iconDev from '../../icons/image.png'

function PagePresentation() {
    return(
        <div className="pagePresentation">
            <h1>Darlène Moundounga
                <br /> Portfolio</h1>
            <div className='subtitlePage'><p>DEVELOPPEUSE WEB FRONT-END</p> <img src={iconDev} alt="icone illustrative développement web" /> </div>
            <a href="" >VOIR LES PROJETS</a>
        </div>
    )
}

export default PagePresentation