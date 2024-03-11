import aboutMeImage from '../../assets/aboutImage.png'

function About () {
    return (
        <div className='aboutMe'>
            <h2>Qui suis-je ?</h2>
            <div className='aboutInfos'>
                <img src={aboutMeImage} alt="Image représentant Moundounga Darlène" />
                <p>Bienvenue dans l'univers dynamique du développement web d'une développeuse web passionnée du front-end et du design. 
                    Avec une solide compréhension des dernières tendances en matière de conception web, je m'efforce de fournir des solutions pratiques et modernes.
                    Si vous recherchez un développeur web qui excelle dans la création d'interfaces intuitives et esthétiquement saisissantes, ne cherchez pas plus loin. 
                    Explorez le potentiel du web avec moi, et n'hésitez pas à me contacter pour discuter de la manière dont nous pouvons collaborer pour donner vie à votre vision.
                </p>
            </div>
        </div>
    )
}

export default About