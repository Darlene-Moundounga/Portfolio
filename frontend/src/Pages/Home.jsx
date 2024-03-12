import PagePresentation from '../Components/PagePresentation/PagePresentation'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import dataSkills from '../datas/skills.json'
import Projects from '../Components/Projects/Projects'
import dataProjects from '../datas/projects.json'

function Home (){
    return (
        <div>
            <PagePresentation/>
            <About/>
            <div className='skillsSection'>
                <h2>Mes compétences</h2>
                <div className="skillsCards">
                    {dataSkills.map((skill) => 
                        <Skills 
                        key={skill.id}
                        title={skill.title} 
                        description={skill.description}/>
                    )}
                </div>
            </div>
            <div className='projectsSection'>
                <h2>Mes projets</h2>
                <div className='projectsCards'>
                    {
                        dataProjects.map((project)=>
                        <Projects
                        key={project.title}
                        id={project.id}
                        cover={project.cover}
                        title={project.title}
                        tags={project.tags}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home