function YourName({setName}) {
    return(
        <>
            <p>Type here your name</p>
            <input type="text" placeholder="Ex: Fulano"
                onChange={(e) => setName(e.target.value)}/>
        </>
    )
}

export default YourName