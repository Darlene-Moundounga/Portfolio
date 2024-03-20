
function Skills ({title,image}){
    return(
        <div className="skillCard">
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>
    )
}

export default Skills