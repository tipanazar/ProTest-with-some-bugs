import PropTypes from 'prop-types';

const Location = ({ color, className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 32 32"
      color={color}
    >
      <path
        d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
        color="#555555"
      ></path>
    </svg>
  );
};

export default Location;

Location.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
