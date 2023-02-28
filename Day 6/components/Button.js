import PropTypes from "prop-types";
import './Button.css'

export default function Button({ onClick, label, length, }) {
  return (
    <button className="btn success" type="button" onClick={onClick}>
    {label} {`(${length})`}
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
