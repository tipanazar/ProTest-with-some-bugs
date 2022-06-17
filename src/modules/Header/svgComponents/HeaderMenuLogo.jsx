import PropTypes from 'prop-types';

const HeaderMenuLogo = ({ color, className }) => {
  return (
    <svg className={className} viewBox="0 0 20 20" fill={color} width='20px' height='20px'>
      <path
        d="M2.5 15h15v-1.6667h-15V15Zm0-4.1667h15V9.1667h-15v1.6666ZM2.5 5v1.6667h15V5h-15Z"
        // fill="#000"
      />
    </svg>
  );
};

export default HeaderMenuLogo;

HeaderMenuLogo.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};
