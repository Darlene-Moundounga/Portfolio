function Projects ({cover,title,description,link,tags}) {
    return (
        <div>
            <img src={cover} alt="couverture du projet" />
            <h4>{title} </h4>
            <p>{description} </p>
            <a href={link}></a>
            <ul>
                <li>{tags} </li>
            </ul>
        </div>
    )
}

export default Projects