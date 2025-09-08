import Image from "next/image";
import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <iframe className="" src="https://vkvideo.ru/video_ext.php?oid=-155557899&id=456239053&hd=2&autoplay=1" width="1080" height="620" allow="encrypted-media; picture-in-picture; screen-wake-lock;" frameborder="0"></iframe>
        <LinkList />

      </section>

    </main>
  );
}
