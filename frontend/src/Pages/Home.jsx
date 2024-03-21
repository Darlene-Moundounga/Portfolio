import PagePresentation from '../Components/PagePresentation/PagePresentation'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import dataSkills from '../datas/skills.json'
import Projects from '../Components/Card/Card'
import dataProjects from '../datas/projects.json'
import Form from '../Components/Form/Form'

function Home (){
    return (
        <div>
            <PagePresentation/>
            <About/>
            <section id='skillsSection'>
                <h2>Mes compétences</h2>
                <div className="skillsCards">
                    {dataSkills.map((skill, key) => 
                        <Skills 
                        key={key}
                        title={skill.title}
                        image={skill.image}
                        />
                    )}
                </div>
            </section>
            
            <section id='projectsSection'>
                <h2>Mes projets</h2>
                <div className='projectsCards'>
                    {
                        dataProjects.map((project, projectKey)=>
                        <Projects
                        key={projectKey}
                        id={project.id}
                        cover={project.cover}
                        title={project.title}/>)
                    }
                </div>
            </section>
            <Form/>
        </div>
    )
}
export default Home