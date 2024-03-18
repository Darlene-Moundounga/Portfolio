function Card ({cover,title,tags,id}) {
    return (
        <div className='projectInfos'>
            <div className="projectCard">
                <img src={cover} alt="couverture du projet" />
                <h4>{title} </h4>
            </div>
            <a href={`/project/${id}`} ><button>Voir les détails</button></a>
        </div>
    )
}
export default Card