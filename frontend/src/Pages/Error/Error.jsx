function Error(){
    return(
        <div className="errorPage">
            <h1>404</h1>
            <h2>Oups !</h2>    
            <p>Cette page n'existe pas...</p>
            <a href="/"><button>Revenir à l'accueil</button></a>
        </div>
    )
}

export default Error