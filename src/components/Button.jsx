import PropTypes from 'prop-types';

const Button = ({ child, variant, onClick, type }) => {
  const buttonStyles = {
    textAlign: 'center',
    border: 'none',
    cursor: 'pointer',
    width: variant === 'submit' ? '100%' : 'auto',
    maxWidth: '100%',
    padding: variant === 'submit' ? '23px 70px' : '10px 20px',
    backgroundColor: variant === 'submit' ? 'var(--button)' : 'transparent',
    color: variant === 'submit' ? 'var(--main-background)' : 'inherit',
  };

  return (
    <button style={buttonStyles} onClick={onClick} type={type}>
      {child}
    </button>
  );
};

Button.propTypes = {
  child: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'submit']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
};

export default Button;
