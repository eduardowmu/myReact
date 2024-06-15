function Evento() {
    /**
     * Reference: https://www.devmedia.com.br/alert-em-javascript/37208
     */
    function myEvent() {
        alert("You activate this message!")
    }


    return(
        <>
            <p>Click here for shooting an event</p>
            <button onClick={myEvent}>Event</button>
        </>
    )
}

export default Evento