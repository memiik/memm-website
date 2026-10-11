import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function SectionPlaceholder({title, description}) {
  return (
    <Layout title={title} description={description}>
      <main className={styles.page}>
        <div className={styles.content}>
          <Heading as="h1">{title}</Heading>
          <p>{description}</p>
        </div>
      </main>
    </Layout>
  );
}
