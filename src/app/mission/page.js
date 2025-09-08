import Header from '@/components/header/header'
import styles from './page.module.css'
import Footer from '@/components/footer/footer'

export default function Misson() {
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.container}>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 505.43 418.06">

                    <path class="cls-1" d="m252.94,418.06h-96.62C90.36,418.06,0,368.78,0,245.6c0,0,8.32-76.69,50.19-166.44C92.05-10.58,221.44-19.6,410.47,29.89c175.67,45.99,98.69,388.17-157.53,388.17Z" />
                </svg>
                <h1 className={styles.title}>миссии наших брендов</h1>
            </div>
            <Footer />
        </main>
    )
}