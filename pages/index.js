import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StreamBids - Live Auctions</title>
        <meta name="description" content="Where Trust Flows and Bids Go Live" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Where Trust Flows and <span style={{ color: '#0070f3' }}>Bids Go Live</span>
        </h1>
        <p className={styles.subtitle}>New Slim PS5 Digital Edition</p>
        <div className={styles.countdown}>Countdown: 28:00</div>

        <div className={styles.auctionCard}>
          <img src="/ps5.png" alt="PS5" className={styles.productImage} />
          <h2>PS5 Auction</h2>
          <p>Starting Bid: $0.01</p>
          <p>Coming Soon @ 7PM</p>
          <div className={styles.buttonGroup}>
            <button className={styles.buyButton}>Buy Bids</button>
            <button className={styles.disabledButton} disabled>Coming Soon</button>
          </div>
        </div>

        <section className={styles.howItWorks}>
          <h2>How It Works</h2>
          <ol>
            <li>Buy Bids</li>
            <li>Join the Live Auction</li>
            <li>Win Big!</li>
          </ol>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© StreamBids 2025 • SSL Secured • <a href="#">Terms</a> • <a href="#">Privacy</a></p>
      </footer>
    </div>
  );
}
