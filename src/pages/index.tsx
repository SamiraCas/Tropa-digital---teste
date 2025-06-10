import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Site Incrível</title>
        <meta name="description" content="Bem-vindo ao meu site pessoal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Olá, seja bem-vindo!</h1>
          <p>Este é o meu site feito com Next.js.</p>

          <a
            href="/contato"
            className={styles.primary}
          >
            Fale comigo
          </a>
        </main>

        <footer className={styles.footer}>
          <p>© 2025 Meu Site Incrível. Todos os direitos reservados.</p>
        </footer>
      </div>
    </>
  );
}
