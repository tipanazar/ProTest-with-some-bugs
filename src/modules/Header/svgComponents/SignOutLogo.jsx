import PropTypes from 'prop-types';

const SignOutLogo = ({ className, color }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" width='16px' height='16px' fill={color}>
      <path d="m12.6465 4.6464-.707.707L14.086 7.5H7v1h7.086l-2.1465 2.1465.707.707L16 8l-3.3535-3.3536Z" />
      <path d="M11 15H1V1h10v1h1V.5c0-.2764-.2236-.5-.5-.5H.5C.2236 0 0 .2236 0 .5v15c0 .2764.2236.5.5.5h11c.2764 0 .5-.2236.5-.5V14h-1v1Z" />
    </svg>
  );
};
export default SignOutLogo;

SignOutLogo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};
