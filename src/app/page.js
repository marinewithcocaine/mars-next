import styles from "./page.module.css";
import LinkList from "@/components/link-list/link-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        <LinkList />
        
      </section>

    </main>
  );
}
