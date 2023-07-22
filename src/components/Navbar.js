import styles from "./Navbar.module.css";
function Navbar() {
    return (
        <div className={styles.Navbar}>
            <ul className={styles.ul}>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
            </ul>
        </div>
    )
}

export default Navbar