import styles from './Form.module.scss'


const Card = ({ imgSrc}) => {
    return (
        <div className={styles.card}>
            <img src={imgSrc} alt=""/>
        </div>
    )
}
export default Card;