import PropTypes from 'prop-types';

const ArrowRight = ({ color, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill={color}
    >
      <path
        d="m23.8535 11.6464-7.5-7.5a.4997.4997 0 0 0-.707 0 .4998.4998 0 0 0 0 .707L22.293 11.5H.5c-.2764 0-.5.2236-.5.5 0 .2763.2236.5.5.5h21.793l-6.6465 6.6464a.4998.4998 0 0 0 .3535.8535.4984.4984 0 0 0 .3536-.1465l7.5-7.5a.4999.4999 0 0 0-.0001-.707Z"
        fill="#fff"
      />
    </svg>
  );
};

export default ArrowRight;

ArrowRight.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
