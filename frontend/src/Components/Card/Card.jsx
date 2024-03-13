function Card ({cover,title,tags}) {
    return (
        <div className='projectInfos'>
            <div className="projectCard">
                <img src={cover} alt="couverture du projet" />
                <h4>{title} </h4>
            </div>
            <button>Voir les détails</button>
            <ul>
                { tags.map((tag,index) =><li key={index}>{tag} </li> )}
            </ul>
        </div>
    )
}
export default Card