import contacts from './data';
import ContactCard from './ContactCard/ContactCard';
import styles from './contacts.module.scss';

const Contacts = () => {
  const element = contacts.map(contact => (
    <ContactCard key={contact.id} {...contact} />
  ));
  return (
    <section className={styles.section}>
      <p className={styles.tittle}>Our Team</p>
      <div className={styles.list}>{element}</div>
    </section>
  );
};

export default Contacts;
