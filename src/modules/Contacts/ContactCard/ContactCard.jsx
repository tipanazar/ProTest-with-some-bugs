import PropTypes from 'prop-types';
import Location from './Social/SocialLogos/Location';
import SocialBlock from './Social/SocialBlock';
import styles from './contactCard.module.scss';

const ContactCard = ({ img, name, position, social, location }) => {
  return (
    <div className={styles.block}>
      <img
        className={styles.foto}
        src={img}
        alt={name}
        width="250"
        height="250"
      />
      <ul className={styles.list}>
        <li className={styles.name}>{name}</li>
        <li className={styles.position}>{position}</li>
        <li className={styles.location}>
          <a
            className={styles.link}
            href="https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.401699,30.2525068,10z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Location className={styles.itemLocat} color={'#555555'} />
            <span className={styles.text}>{location}</span>
          </a>
        </li>
        <li className={styles.socialBlock}>
          <SocialBlock social={social} color={'#555555'} />
        </li>
      </ul>
    </div>
  );
};
export default ContactCard;

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  social: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
    google: PropTypes.string.isRequired,
  }),
};
