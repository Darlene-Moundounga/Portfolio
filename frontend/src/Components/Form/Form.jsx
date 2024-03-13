function Form () {
    return(
        <div>
            <h3>Contactez moi !</h3>
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" placeholder="Votre nom"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Votre adresse mail" />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Votre message"></textarea>
            </div>
        </div>
    )
}

export default Form