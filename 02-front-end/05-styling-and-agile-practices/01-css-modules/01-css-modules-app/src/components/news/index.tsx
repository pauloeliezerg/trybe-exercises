import styles from './news.module.css';

type NewsProps = {
  title: string;
  content: string;
};

function News({ title, content }: NewsProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        {content}
      </p>
    </div>
  );
}

export default News;
