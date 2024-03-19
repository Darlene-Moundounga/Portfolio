
function Skills ({title,image}){
    return(
        <div className="skillCard">
            <img src={image} alt="" />
            <h4>{title}</h4>
        </div>
    )
}

export default Skills