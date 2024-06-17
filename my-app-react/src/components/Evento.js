import Button from './Button'

function Evento() {
    /**
     * Reference: https://www.devmedia.com.br/alert-em-javascript/37208
     */
    function myEvent() {
        alert("You activate this message!")
        console.log("You activate this message!")
    }

    function secondEvent() {
        alert("Ativando meu segundo evento")
        console.log("Ativando meu segundo evento")
    }

    return(
        <>
            <p>Click here for shooting an event</p>
            <Button event={myEvent} text="Primeiro Evento"/>
            <Button event={secondEvent} text="Segundo Evento"/>
        </>
    )
}

export default Evento