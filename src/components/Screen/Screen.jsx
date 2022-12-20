import styles from '../Screen/screen.module.css';

export default function Screen() {
    let screenUp = e => {
        e.preventDefault()
        e.target.parentNode.classList.add(styles.up)
    }
 
    return (
        <div className={styles.screen}>
            <h1>Aim Training</h1>
            <a href='/' className={styles.start} onClick={screenUp}>Start game</a> 
        </div>
    );
}