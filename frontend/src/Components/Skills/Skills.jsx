
function Skills ({title,image}){
    return(
        <div className="skillCard">
            <img src={image} alt="icone représentant la compétence" />
            <h3>{title}</h3>
        </div>
    )
}

export default Skills