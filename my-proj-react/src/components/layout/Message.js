import styles from './Message.module.css'
import { useState, useEffect } from 'react'

function Message({ type, msg }) {
    //alterando a visibilidade
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        } 

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    /**
     * este useEffect está condicionado a mensagem
     * e ao seu tipo
     * */
    }, [msg])

    return(
        <>
            {visible && (
                    <div className={`${styles.message} ${styles[type]}`}>
                        {msg}
                    </div>
            )}
        </>
    )
}

export default Message