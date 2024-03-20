function Form () {
    return(
            <div id="contact">
                <h3>Contactez moi !</h3>
                <div className="form">
                    <div className="infos">
                        <input type="text" name="name" id="name" placeholder="Nom"/>
                        <input type="email" name="email" id="email" placeholder="Adresse-mail" />
                    </div>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button>Envoyer</button>

        </div>
    )
}

export default Form