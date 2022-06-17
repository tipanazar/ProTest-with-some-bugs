import PropTypes from 'prop-types';
import styles from './question.module.scss';

const Question = ({
  question: { question, answers, questionId },
  onChange,
  selectedAnswers,
}) => {
  const answersRadio = answers.map((answer, index) => {    
    return (
      <label className={styles.answers_form_label} key={index}>
        <input
          className={styles.answers_form_radio}
          id={questionId}
          type="radio"
          name="answers"
          value={answer}
          required={false}   
          onChange={onChange}      
          checked={Boolean(selectedAnswers.find(
            e => e?.answer === answer && String(e?.questionId) === String(questionId)
          ))}
        />
        {answer}
      </label>
    );
  });
  const size =
    (question?.length < 30 && styles.answers_title_size_large) ||
    (question?.length < 60 && styles.answers_title_size_medium) ||
    styles.answers_title_size_small;
  return (
    <div className={styles.answers}>
      <p className={`${styles.answers_title} ${size}`}>{question}</p>
      <div
        className={styles.answers_form}       
        name="answer_form"
      >
        {answersRadio}
      </div>
    </div>
  );
};

export default Question;

Question.defaultProps = {
  answers: [],
};

Question.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
