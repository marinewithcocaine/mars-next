"use client"

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import styles from './page.module.css';
import Title from '@/components/title/title';
import Slider from '@/components/swiper/slider';
import RegionList from '@/components/region-list/region-list';
import { images } from '@/public/static/images';
import { regions } from '@/public/static/regions';
import { useState, useEffect } from 'react';
import North from '@/components/maps/north/north';
import East from '@/components/maps/east/east';
import SouthEast from '@/components/maps/south-east/south-east';
import Center from '@/components/maps/center/center';
import South from '@/components/maps/south/south';
import NorthEast from '@/components/maps/north-east/north-east';
import NorthWest from '@/components/maps/north-west/north-west';
import West from '@/components/maps/west/west';
import Novomosk from '@/components/maps/novomosk/novomosk';
import Troitsk from '@/components/maps/troitsk/troitsk';
import Zelenograd from '@/components/maps/zelenograd/zelenograd';
import SouthWest from '@/components/maps/south-west/south-west';

export default function Map() {

    const [activeMap, setActiveMap] = useState('');

    function handleListClick(e) {
        e.preventDefault();
        setActiveMap(`${e.target.id}`);
    }

    function handleMapClick (e) {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <main className={styles.main}>
            <Title title={'выгул'} color={'green'} />
            <Header />
            <section className={styles.content}>
                <h2>
                    Мы&nbsp;разработали&nbsp;концепт&nbsp;более&nbsp;100&nbsp;площадок
                    для выгула собак, построенных в рамках
                    проекта мэра Москвы «Мой район»,
                    проект&nbsp;«Питомцы в Москве»

                </h2>
                <div className={styles.swiper_container}>
                    <Slider className={styles.slider} images={images} pt="160px" />
                    <RegionList regions={regions} handleClick={handleListClick} active={activeMap} />
                </div>
            </section>
            <svg className={styles.map} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 622.4 828.85">
                <North activeMap={activeMap} handleClick={handleMapClick} />
                <Center activeMap={activeMap} handleClick={handleMapClick} />
                <SouthEast activeMap={activeMap} handleClick={handleMapClick} />
                <South activeMap={activeMap} handleClick={handleMapClick} />
                <NorthWest activeMap={activeMap} handleClick={handleMapClick} />
                <NorthEast activeMap={activeMap} handleClick={handleMapClick} />
                <East activeMap={activeMap} handleClick={handleMapClick} />
                <West activeMap={activeMap} handleClick={handleMapClick} />
                <Novomosk activeMap={activeMap} handleClick={handleMapClick} />
                <Troitsk activeMap={activeMap} handleClick={handleMapClick} />
                <Zelenograd activeMap={activeMap} handleClick={handleMapClick} />
                <SouthWest activeMap={activeMap} handleClick={handleMapClick} />
            </svg>
        </main>
    )
}