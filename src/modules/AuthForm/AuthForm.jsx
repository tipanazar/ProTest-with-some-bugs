import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';

import { initialState } from './initialState';
import styles from './authForm.module.scss';

const AuthForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialState });
  const [type, setType] = useState('login');

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  }, []);

  const changeType = type => setType(type);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form, type);
    setForm({ ...initialState });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.text}>
          Login to our app using e-mail and password:
        </p>
        <TextField
          type={'email'}
          value={form.email}
          name={'email'}
          placeholder={'E-mail'}
          required={true}
          onType={handleChange}
          className={styles.TextField}
        />
        <TextField
          type={'password'}
          value={form.password}
          name={'password'}
          placeholder={'Password'}
          required={true}
          onType={handleChange}
          className={styles.TextField}
        />
        <div className={styles.form__buttons}>
          <Button
            btnText={'Sign In '}
            isActive={true}
            type={'submit'}
            className={styles.button}
            onClickBtn={() => changeType('login')}
          />
          <Button
            btnText={'Sign Up'}
            isActive={false}
            type={'submit'}
            className={styles.button}
            onClickBtn={() => changeType('register')}
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
