import styles from './zelenograd.module.css';

export default function Zelenograd({ activeMap, handleClick }) {

    const id = "zelenograd";

    const activateMap = () => {
        handleClick(id);
    };

    return (
        <g onClick={activateMap} className={id === activeMap ? `${styles.zelenograd} ${styles.zelenograd_active}` : styles.zelenograd} data-name="Eastern Administrative Okrug">
            <path id="zelenograd-map" d="m184.48.75l31.56.25c1.25,0,2.47.45,3.44,1.24l24.61,20.09c1.44,1.17,2.19,2.99,1.99,4.84l-1.42,13.45c-.42,3.96-4.77,6.18-8.22,4.19l-7.99-4.6c-3.14-1.81-7.14-.14-8.07,3.37l-2.38,9.02c-.23.88-.24,1.8-.03,2.69l.78,3.25c1.04,4.36-3.29,8.07-7.44,6.38l-25.71-10.5c-2.14-.87-3.51-2.99-3.42-5.3l1.12-29.9c.03-.79-.11-1.58-.42-2.32l-3.54-8.52c-1.51-3.64,1.18-7.65,5.13-7.62Z" />
        </g>

    )
}