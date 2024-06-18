function Welcome({ name }) {
    function sendMsg(name) {
        return name !== '' ? (
            <p>Welcome {name.trim()}</p>
        ) : (null)
    }

    return(<>{sendMsg(name)}</>)
}

export default Welcome