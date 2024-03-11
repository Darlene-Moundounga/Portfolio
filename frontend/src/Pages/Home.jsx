import PagePresentation from '../Components/PagePresentation/PagePresentation'
import About from '../Components/About/About'
import Skills from '../Components/Skills/Skills'
import dataSkills from '../datas/skills.json'

function Home (){
    return (
        <div>
            <PagePresentation/>
            <About/>
            <div>
                {dataSkills.map((skill) => 
                    <Skills 
                    key={skill.id}
                    title={skill.title} 
                    description={skill.description}/>
                )}
            </div>
        </div>
    )
}

export default Home