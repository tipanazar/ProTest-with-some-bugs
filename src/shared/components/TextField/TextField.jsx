import { memo } from 'react';

import PropTypes from 'prop-types';

const TextField = ({ type, name, value, placeholder, required, onType, className }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onType}
    />
  );
};

export default memo(TextField);

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onType: PropTypes.func.isRequired,
};
