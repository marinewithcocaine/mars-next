'use client'

import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";
import Frame from "@/components/frame/frame";
import { useState } from "react";

export default function Home() {

  const [isPopupOpened, setPopupOpened] = useState(false);

  function openPopup() {
    setPopupOpened(true);
  }

  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <LinkList onclick={openPopup}/>
        <Frame isOpen={isPopupOpened} onClick={() => setPopupOpened(false)}/>
      </section>
    </main>
  );
}
