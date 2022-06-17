import styles from './results.module.scss';

import { PieChart, Pie, Cell } from 'recharts';
import catPc from '../../images/results/catPcx.png';
import catPc2x from '../../images/results/catPcx2.png';
import { Link } from 'react-router-dom';
import {
  getTestType,
  getTestResult,
} from '../../redux/qaTests/qaTests-selectors';
import { useSelector, shallowEqual } from 'react-redux';
import Button from 'shared/components/Button';

const Results = () => {
  const testType = useSelector(getTestType, shallowEqual);
  const result = useSelector(getTestResult, shallowEqual);
  const correctAnswers = Math.round(
    (result.result.replace('%', '') * 13) / 100
  );
  const falseAnswers = 12 - correctAnswers;

  const data = [
    { name: 'false answer', value: falseAnswers },
    { name: 'true answer', value: correctAnswers },
  ];

  const COLORS = ['#D7D7D7', '#FF6B09'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) *0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontWeight="500"
        fontSize="18px"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 102).toFixed(0)}%`}
      </text>
    );
  };
  const Crujok = () => {
    return (
      <>
        <PieChart width={310} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </>
    );
  };

  return (
    <div className="container">
      <div className={styles.wrapper_answer}>
        <h1 className={styles.header}>Results</h1>
        <p className={styles.header__text}>{`[ Testing ${testType}_]`}</p>
        {Crujok()}
        <div className={styles.answers}>
          <p className={styles.text_answers}>
            Correct answers - {correctAnswers}{' '}
          </p>
          <p>Total questions - 12</p>
        </div>
        <picture className={styles.picture}>
          <source
            media="(max-width: 719px)"
            src="./CatMobilex2.png  1x, ./CatMobilex2.png 2x"
          />
          <source media="(min-width: 720px)" src={catPc2x} />
          <img src={catPc} alt="котек" />
        </picture>
        <h2>{result.mainMessage}</h2>
        <p className={styles.text}>{result.secondaryMessage}</p>
        <Button btnText='Try Again' className={styles.tryAgainBtn}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Results;
