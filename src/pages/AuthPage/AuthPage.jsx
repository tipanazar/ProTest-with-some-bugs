import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import {
  getLoading,
  getError,
} from '../../redux/userAccount/userAccount-selectors';
import Loader from '../../shared/components/Loader';

import { userOperations } from '../../redux/userAccount/userAccount-operations';

import AuthForm from '../../modules/AuthForm/AuthForm';
import styles from './auth-page.module.scss';

const AuthPage = () => {
  const isLoading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);
  const dispatch = useDispatch();

  const auth = (form, type = 'login') => {
    if (type === 'register') {
      dispatch(userOperations.registerUser(form));
      return;
    }
    dispatch(userOperations.loginUser(form));
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main>
          <div className="container">
            <div className={styles.auth_wrapper}>
              <div className={styles.text_wrapper}>
                <h2 className={styles.title}>Pro Test</h2>
                <p className={styles.text}>
                  <span className={styles.text_span}>[ </span>We will help you
                  find weak points in knowledge so that you can strengthen it.
                  We will show you what is relevant to know for a{' '}
                  <b>QA Engineer</b> and will try to make the learning process
                  more diverse_<span className={styles.text_span}> ]</span>
                </p>
                {!error || (
                  <h2 className={styles.errorNotice}>Wrong data, try again</h2>
                )}
              </div>
              <AuthForm onSubmit={auth} />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default AuthPage;
