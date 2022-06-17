import { useEffect, useState } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getTestType } from '../../redux/qaTests/qaTests-selectors';

import { qaOperations } from '../../redux/qaTests/qaTests-operations';

import Button from 'shared/components/Button';
import Question from './Question';
import Loader from 'shared/components/Loader';
import styles from './test.module.scss';

const surveyTepes = ['tech', 'theory'];
const Test = () => {
  const testType = useSelector(getTestType, shallowEqual);
  const [questions, setQuestions] = useState({items:[],
  loading:true, error:null});
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(    
    () =>{      
           const localQuestions = localStorage.getItem('questions');           
      if (localQuestions && JSON.parse(localQuestions).length) {
        // console.log(localStorage.getItem('testAnswers'))
        setQuestions({items:JSON.parse(localQuestions), loading:false, error:null})
        const saveAnswers = JSON.parse(localStorage.getItem('testAnswers'))??{answers:[], currentQuestion:0}
        setAnswers(saveAnswers.answers??[])
        setCurrentQuestion(saveAnswers.currentQuestion??0)
      }  else {
        !testType || dispatch(qaOperations.getTest(testType)).then(({ payload }) =>{
          setQuestions({items:payload.data, loading:false, error:null})
          localStorage.setItem('questions', JSON.stringify(payload.data))
          localStorage.removeItem('testAnswers')}
        ).catch(error=>setQuestions({items:[], loading:false, error}))
      }
    }
      ,
    [dispatch, testType]
  );

  if (!surveyTepes.includes(testType)) {
    return <Navigate to="/" />;
  }

  const onClickFinish = () => {
    localStorage.removeItem('testAnswers');
    localStorage.removeItem('questions');
    if (questions.items?.length === answers?.length) {
      dispatch(qaOperations.getResults({ answers, type: testType })).then(
        result => {
          return result;
        }
      );
      return navigate("/results" );
    }
    return navigate('/');
  };

  if (!questions.items?.length) {
    return (
      <main>
      <div className="{styles.test} container">
        <div>
          <h2>{'[Testing ' + testType + ']'}</h2>
          <Button
            btnText="Finish Test"
            type="button"
            isActive={true}
            onClickBtn={onClickFinish}
            className={styles.test_title_btn}
          />
        </div>
        {!questions.loading &&(<p className={styles.error}>Sorry, couldn't get questions.</p>)}
      </div>
      {questions.loading && <Loader />}
      </main>
    );
  }

  const onChangeAnswer = ({target:{ id:questionId, value:answer}}) => {    
    const index = answers.findIndex(e => String(e.questionId) === String(questionId));

    setAnswers(prevState => {
      if (index === -1) {
        const newAnswers = [...prevState, { questionId: Number(questionId), answer }];
        localStorage.setItem('testAnswers',JSON.stringify({answers:newAnswers, currentQuestion}))
        return newAnswers;
      }
      const newAnswers = [...prevState];
      newAnswers[index] = { questionId, answer };
      localStorage.setItem('testAnswers',JSON.stringify({answers:newAnswers, currentQuestion}))
      console.log(newAnswers)
      return newAnswers;
    });
  };

  const onClickPrevious = () => {
    setCurrentQuestion(prevState => {
      if (prevState > 0) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  const onClickNext = () => {
    setCurrentQuestion(prevState => {
      if (prevState < questions.items.length - 1) {
        return prevState + 1;
      }
      return prevState;
    });
  };

  return (
    <main>
    <div className={styles.test}>
      <div className={styles.test_title}>
        <h2>[Testing<br/>{testType}_]</h2>
        <Button
          btnText="Finish Test"
          type="button"
          isActive={true}
          onClickBtn={onClickFinish}
          className={styles.test_title_btn}
        />
      </div>
      {Boolean(questions.items?.length)&&<div className={styles.test_question}>       
        <p className={styles.test_question_title}>
          Question{' '}
          <span className={styles.test_curent}>{currentQuestion + 1}</span> /{' '}
          {questions.items.length}{' '}
        </p>

        <Question
          question={questions.items[currentQuestion]}
          onChange={onChangeAnswer}
          selectedAnswers={answers}
        />
      </div>
        }
      
      <div className={styles.test_navigate}>
        <Button
          btnText=""
          type="button"
          isActive={true}
          onClickBtn={onClickPrevious}
          className={styles.test_navigate_btn_prev}
        />
        <Button
          btnText=""
          type="button"
          isActive={true}
          onClickBtn={onClickNext}
          className={styles.test_navigate_btn_next}
        />
      </div>
    </div>
    {questions.loading && <Loader />}
    </main>
  );
};

export default Test;
