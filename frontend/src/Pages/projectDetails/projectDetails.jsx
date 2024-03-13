function projectDetails ({image,title,description,link,}){
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title} </h2>
            <p>{description} </p>
            <a href={link} ></a>
        </div>
    )
}

export default projectDetails