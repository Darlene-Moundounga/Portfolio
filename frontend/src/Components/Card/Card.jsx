export default function Card ({cover,title,id}) {
    return (
        <div className='projectInfos'>
            <div className="projectCard">
                <img src={`${process.env.PUBLIC_URL}/images/${cover}`} alt="couverture du projet" />
                <h3>{title} </h3>
            </div>
            <a href={`/project/${id}`} ><button>Voir les détails</button></a>
        </div>
    )
}