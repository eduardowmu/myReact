import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
    return(
        <footer>Footer
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaLinkedin/></li>
                <li><FaInstagram/></li>
            </ul>
        </footer>
    )
}

export default Footer