import aboutMeImage from '../../assets/aboutImage.webp'

export default function About () {
    return (
        <section id='aboutMe'>
            <h2>Qui suis-je ?</h2>
            <div className='aboutInfos'>
                <img src={aboutMeImage} alt="Image représentant Moundounga Darlène" />
                <p>Bienvenue dans l'univers dynamique du développement web d'une développeuse web passionnée du front-end et du design. <br />
                    Avec une solide compréhension des dernières tendances en matière de conception web, je m'efforce de fournir des solutions pratiques et modernes. <br />
                    <br />Mon portfolio diversifié témoigne de mon engagement à offrir des expériences utilisateur exceptionnelles, alliant performance, accessibilité et esthétique.
                    <br />Que vous recherchiez une refonte de site web, le développement d'une nouvelle application ou une consultation sur l'optimisation de votre présence en ligne, 
                    je suis là pour vous aider à concrétiser votre vision. <br /> 
                    <br />Explorez le potentiel du web avec moi et ensemble, donnons vie à vos projets les plus ambitieux. <br />
                    <span>N'hésitez pas à me contacter pour discuter de la manière dont nous pouvons collaborer pour atteindre vos objectifs en matière de développement web.</span>
                </p>
            </div>
        </section>
    )
}