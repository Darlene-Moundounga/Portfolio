import PagePresentation from '../Components/PagePresentation/PagePresentation'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import dataSkills from '../datas/skills.json'

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
        </div>
    )
}

export default Home