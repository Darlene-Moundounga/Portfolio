import projects from '../../datas/projects.json'

function projectDetails ({id}){
    const project = projects.find((project)=> project.id ==id)
    if(project == null){
        window.location.href = '/error'
    }else{
        return (
            <div className='projectDetails'>
                <a href="/" className='linkToBack'><i className="fa-regular fa-circle-left"></i></a>
                <img src={project.image} alt="" />
                <h2>{project.title}</h2>
                <p>{project.description} </p>
                <a href={project.link} >Lien vers le site</a>
            </div>
        )
    }       
}

export default projectDetails