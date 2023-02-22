import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.loader}>
        {Array.from(Array(12), (_, key) => (
          <div key={key} />
        ))}
      </div>
    </div>
  );
};
