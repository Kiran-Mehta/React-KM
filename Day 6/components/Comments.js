import PropTypes from "prop-types";
import './Button.css'


//display only , accept array
export default function Comments({ comments, onClick }) {
    return (
        <div>
            { comments.map(comment => (
            <div key={comment.id}>
             <h6>{comment.name}</h6>
             {comment.body}
            </div>))}
        </div>
    );
}

Comments.propTypes = {
    text: PropTypes.string.isRequired,
};

Comments.defaultProps = {
    text: ""
};
