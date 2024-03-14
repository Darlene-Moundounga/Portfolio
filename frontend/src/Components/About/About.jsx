import aboutMeImage from '../../assets/aboutImage.png'

function About () {
    return (
        <div className='aboutMe'>
            <h2>Qui suis-je ?</h2>
            <div className='aboutInfos'>
                <img src={aboutMeImage} alt="Image représentant Moundounga Darlène" />
                <p>Bienvenue dans l'univers dynamique du développement web d'une développeuse web passionnée du front-end et du design. 
                    Avec une solide compréhension des dernières tendances en matière de conception web, je m'efforce de fournir des solutions pratiques et modernes.
                    Mon portfolio diversifié témoigne de mon engagement à offrir des expériences utilisateur exceptionnelles, alliant performance, accessibilité et esthétique.
                    Que vous recherchiez une refonte de site web, le développement d'une nouvelle application ou une consultation sur l'optimisation de votre présence en ligne, 
                    je suis là pour vous aider à concrétiser votre vision. 
                    Explorez le potentiel du web avec moi et ensemble, donnons vie à vos projets les plus ambitieux.
                    N'hésitez pas à me contacter pour discuter de la manière dont nous pouvons collaborer pour atteindre vos objectifs en matière de développement web. 
                    Je suis impatiente de mettre mes compétences et ma passion au service de votre succès.
                </p>
            </div>
        </div>
    )
}

export default About