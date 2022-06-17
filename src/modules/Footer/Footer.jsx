import { Link } from 'react-router-dom';

import HeartIcon from './svgComponent/HeartIcon';
import CopyrightIcon from './svgComponent/CopyrightIcon';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className={styles.footerContainer}>
          <CopyrightIcon className={styles.copyrightIcon} color='white'/>
          <p>2022</p>
          <p className={styles.footerText}>All Rights Reserved</p>
          <p>Developed with</p>
          <HeartIcon className={styles.heartIcon} color='#FF6B09'/>
          <Link className={styles.footerLink} to='contacts'>by GoIT Students</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
