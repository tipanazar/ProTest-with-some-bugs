import { nanoid } from 'nanoid';

import { literature } from './info-content/literature';
import { resources } from './info-content/resources';

import styles from './usefulInfo.module.scss';

const UsefulInfo = () => {
  const literatureList = literature.map(item => {
    return (
      <li className={styles.litItem} key={nanoid()}>
        <a href={item.link}>{item.content}</a>
      </li>
    );
  });
  const resourcesList = resources.map(item => {
    return (
      <li className={styles.resItem} key={nanoid()}>
        <a href={item.link}>{item.content}</a>
      </li>
    );
  });

  return (
    <main className={styles.mainBlock}>
      <section className="container">
        <div className={styles.infoBlock}>
          <h2 className={styles.title}>Useful literature</h2>
          <ol className={styles.litList}>{literatureList}</ol>
          <h2 className={styles.title}>Useful resources</h2>
          <ol className={styles.resList}>{resourcesList}</ol>
        </div>
      </section>
    </main>
  );
};

export default UsefulInfo;
