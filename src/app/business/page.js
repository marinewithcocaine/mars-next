import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import styles from './page.module.css';
import Title from '@/components/title/title';
import Slider from '@/components/swiper/slider';
import { businessImages } from '@/public/static/images';


export default function Business() {

    return (
        <main className={styles.main}>
            <Title title={'бизнес'} color={'red'} />
            <Header />
            <section className={styles.swipers}>
                <Slider title={`Мы участвуем в${'\u00A0'}мероприятиях, продвигающих pet${'\u2011'}friendly культуру`} images={businessImages} pt={"142px"} />
                <Slider title={`Помогаем${'\u00A0'}офисам наших${'\u2011'}партнеров становиться pet${'\u2011'}friendly`} images={businessImages} pt={"142px"}/>
                <Slider title={`Вместе с партнёрами помогаем животным в приютах`} images={businessImages} pt={"142px"}/>
                <Slider title={`По всей стране запускаем Короба${'\u00A0'}доброты`} images={businessImages} pt={"142px"}/>
                <Slider title={`Приняли участие в${'\u00A0'}рабочей${'\u00A0'}группе Стандарта${'\u00A0'}Роскачества «Путешествия с${'\u00A0'}питомцами»`} images={businessImages} pt={"142px"}/>
                <Slider title={`Запустили проект по${'\u00A0'}защите водных ресурсов от бренда Sheba в сети Перекресток`} images={businessImages} pt={"142px"}/>
            </section>
            <Footer />
        </main >
    )
}