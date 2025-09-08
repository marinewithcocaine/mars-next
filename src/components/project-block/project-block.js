import styles from './project-block.module.css';

export default function ProjectBlock({ title }) {
    return (
        <div className={styles.block}>
            <h2 className={styles.block_title}>
                {title}
            </h2>
            <ul className={styles.block_list}>
                <li className={styles.block_item}></li>
            </ul>
        </div>
    )
}