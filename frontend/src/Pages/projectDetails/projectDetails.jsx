import Form from '../../Components/Form/Form'
import projects from '../../datas/projects.json'

function projectDetails ({id}){
    const project = projects.find((project)=> project.id ==id)
    if(project == null){
        window.location.href = '/error'
    }else{
        return (
            <div className='projectDetails'>
                <a href="/" className='linkToBack'><i className="fa-regular fa-circle-left"></i>Revenir à l'accueil</a>
                <div className='imagesProject'>
                    {
                        project.images.map((image,index)=> {
                            return (
                                <div key={index}> <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Aperçu du site web du projet" /></div>
                            )
                        }
                        
                        )
                    }
                </div>
                <ul className='tagsSection'> Compétences monopolisées :
                    {project.tags.map((tag, index) => (
                        <li key={index} className='projectTag'>{tag}</li>
                    ))}
                </ul>
                <h2>{project.title}</h2>
                <ul className='descriptionSection'>{project.descriptions.map((description,index)=>
                        ( 
                            <li key={index} className='projectDescription'>{description} </li>
                        )
                    )} 
                </ul>
                
                <a href={project.link}  className='linkToProject'>Lien vers {project.title} 
                    <img src="https://cdn-icons-png.flaticon.com/128/6364/6364375.png" alt="Lien vers le pojet" /> 
                </a>
                <Form/>
            </div>
        )
    }       
}

export default projectDetails