import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StreamBids</title>
        <meta name="description" content="Where Trust Flows and Bids Go Live" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <h1 className={styles.title}>Where Trust Flows and Bids Go Live</h1>
        <p className={styles.subtitle}>New Slim PS5 Digital Edition</p>
        <div className={styles.countdown}>Countdown: <span>28:00</span></div>

        {/* Auction Card */}
        <div className={styles.auctionCard}>
          <h2>PS5 Auction</h2>
          <p>Starting Bid: $0.01</p>
          <p>Coming Soon @ 7PM</p>
          <div className={styles.buttonRow}>
            <button className={styles.button}>Buy Bids</button>
            <button className={styles.buttonDisabled} disabled>Coming Soon</button>
          </div>
        </div>

        {/* How It Works */}
        <div className={styles.howItWorks}>
          <h2>How It Works</h2>
          <ol>
            <li>Buy bids</li>
            <li>Join the live auction</li>
            <li>Place bids and win</li>
          </ol>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Secure Payments | Live Auctions | Contact: streambidsco@gmail.com</p>
      </footer>
    </div>
  )
}
