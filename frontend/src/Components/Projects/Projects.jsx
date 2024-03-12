import dataProjects from '../../datas/projects.json'

function Projects ({cover,title,description,link,tags}) {
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
export default Projects