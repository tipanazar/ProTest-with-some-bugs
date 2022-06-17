import PropTypes from 'prop-types';

const HeartIcon = ({ color, className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill={color}
      width="16px"
      height="16px"
    >
      <path d="m8 15.36-1.12-1.12C2.72 10.56 0 8.08 0 5.04 0 2.56 1.92.64 4.4.64c1.36 0 2.72.64 3.6 1.68.88-1.04 2.24-1.68 3.6-1.68 2.48 0 4.4 1.92 4.4 4.4 0 3.04-2.72 5.52-6.88 9.2L8 15.36Z" />
    </svg>
  );
};

export default HeartIcon;

HeartIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};
