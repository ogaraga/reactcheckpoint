import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap styling importation
import styles from "./Cards.module.css"; //css-module styling imported
function Cards() {
    return (
        <div className={styles.cards} style={{ width: 18 }}>
            <div className={styles.card1}>
                <img className={styles.img1} src={require('../BIRD.jpg')} alt="Bird" width={100} height={100} />
                <hr />  {/* horizontal line that separate image from other elements */}
                <h2>The Oldest Bird in the world</h2>
                <p>This is the oldest bird and most expensive in the world priced @ $2000</p>
            </div>
            <div className={styles.card2}>
                <img className={styles.img2} src={require('../lightBulb.gif')} alt='lightBulb' width={100} height={100} />
                <hr /> {/* horizontal line that separate image from other elements */}
                <h2>A Money-giving Bulb</h2>
                <p>This bulb generates tons of dollars per second. It costs $50 to get and its span is 30 days.</p>
            </div>
            <div className={styles.card3}>
                <img className={styles.img3} src={require('../my-pic-1 (2).jpg')} alt='Mypic' width={100} height={100} />
                <hr />  {/* horizontal line that separate image from other elements */}
                <h2>The youngest Prsident of Nigeria</h2>
                <p>If you saw him, get him bundled for riches! Are you intrigued?</p>
            </div>
        </div>
    )
}

export default Cards