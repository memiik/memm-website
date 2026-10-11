import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Programmer socks? Purely for productivity, obviously.">
      <main className={styles.home}>
        <div className={styles.content}>
          <h1>Programmer socks?</h1>
          <p>Purely for productivity, obviously.</p>
          <Link to="/blog">Read the blog</Link>
        </div>
      </main>
    </Layout>
  );
}
