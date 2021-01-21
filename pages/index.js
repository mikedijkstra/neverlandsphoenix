import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Neverlands Phoenix!
        </h1>

        <p className={styles.description}>
          This is a player run site for the <a href="http://neverlandsphoenix.org/">Neverlands Phoenix Ultima Online Shard</a>.
        </p>

        <div className={styles.grid}>
          <a href="/getting-started" className={styles.card}>
            <h3>How to start &rarr;</h3>
            <p>Learn how to download Ultima Online and get started playing Neverlands Phoenix.</p>
          </a>

          <a href="/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about the commands, rules, skills and items within Neverlands Phoenix.</p>
          </a>

          <a
            href="/guides"
            className={styles.card}
          >
            <h3>Guides &rarr;</h3>
            <p>Discover guides written by players on treasure hunting, crafting and more.</p>
          </a>

          <a
            href="https://discord.gg/8maTyRF"
            className={styles.card}
          >
            <h3>Discord &rarr;</h3>
            <p>
              Join us on Discord to ask questions, contact staff and barter for items.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://neverlandsphoenix.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Neverlands Phoenix
        </a>
      </footer>
    </div>
  )
}
