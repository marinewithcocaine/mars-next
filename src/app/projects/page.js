import Header from '@/components/header/header'
import styles from './page.module.css'
import ProjectBlock from '@/components/project-block/project-block'
import Footer from '@/components/footer/footer'

export default function Projects() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 582.26 313.13">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <path d="m288.65,266.54h-89.59c-61.16,0-144.95-45.69-144.95-159.91,0,0,7.72-71.11,46.54-154.33,38.82-83.22,158.79-91.57,334.07-45.69,162.9,42.64,91.51,359.93-146.07,359.93Z" />
                        </g>
                    </g>
                </svg>
                <h1 className={styles.title}>образовательные проекты</h1>
            </div>
            <Header />
            <section className={styles.content}>
                <ProjectBlock title={'для сотрудников'} />
                <ProjectBlock title={'для партнеров'} />
                <ProjectBlock title={'для профессионалов'} />
                <ProjectBlock title={'для детей'} />
                <ProjectBlock title={'наши исследования'} />
            </section>
            <div className={styles.image_container}>
                <svg className={styles.test} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1209.6 277.47">
                    <path class="cls-1" d="m.18,274.97s44.12-3.22,66.57-9.19c3.73-.99,41.05-16.49,60.5-30.85,15.69-11.58,41.35-48.65,21.37-73.42-9.73-12.07-24.11,1.06-28.96,12.32-24.97,58.03,14.09,85.66,39.67,90.09,86.57,14.98,119.6-61.64,202.38-66.97,53.09-3.42,96.13,12.33,147.47,20.23,58.81,9.05,101.35,6.89,139.33-28.46,10.11-9.41,79.29-77.06,85.66-137.2,4.52-42.61-60.22-58.46-75.82-.03,0,0-27.01-49.85-67.01-16.34-16.87,14.13-16.65,43.04,2.09,69.62,35.57,50.46,130,101.95,213.5,94.17C1047.81,176.52,1207.75,1.69,1207.75,1.69" />
                </svg>
            </div>
            <Footer />
        </main>

    )
}