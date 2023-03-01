import PropTypes from "prop-types";
export default function Button({ onClick, label }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  //label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  label: ""
};
