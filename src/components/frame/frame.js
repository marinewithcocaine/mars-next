import styles from './frame.module.css'

export default function Frame ({isOpen, onClick}) {

    return (
        <div className={isOpen? `${styles.popup}` : `${styles.popup_closed}`}>
            <div className={styles.popup__container}>
                <iframe className={styles.popup__frame} src='https://petcarecenter.ru/' frameBorder={false} />
            </div>
            <div className={styles.button} onClick={onClick}>

            </div>
        </div>
    )
}