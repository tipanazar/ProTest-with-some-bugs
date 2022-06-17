import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import testType from '../../redux/qaTests/qaTests-actions';

import ArrowRight from './ArrowRight';

import styles from './home.module.scss';

const Home = () => {
  const dispatch = useDispatch();
  const setType = useCallback(type => {
    dispatch(testType(type));
  }, [dispatch]);
  useEffect(()=>{
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('questions');
    setType({ testType: '' })
  
  }, [setType])
  
  return (
    <main>
      <section className="container">
        <div className={styles.mainBlock}>
          <h2 className={styles.firstTitle}>
            “Regression testing. What is it?
            <br /> If the system compiles, that's good, if it boots, that's
            <br />
            great!”
          </h2>
          <h3 className={styles.secondTitle}>Linus Torvalds</h3>
          <h4 className={styles.thirdTitle}>
            Linux kernel creator, hacker, 1969
          </h4>
          <div className={styles.linkBlock}>
            <Link
              onClick={() => setType({ testType: 'tech' })}
              className={styles.testLink}
              to="test"
            >
              QA technical training
              <ArrowRight className={styles.arrowRight} color={'white'} />
            </Link>
            <Link
              onClick={() => setType({ testType: 'theory' })}
              className={styles.testLink}
              to="test"
            >
              Testing theory
              <ArrowRight className={styles.arrowRight} color={'white'} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
