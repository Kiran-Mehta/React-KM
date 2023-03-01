import PropTypes from "prop-types";

export default function ChildData({ parentCallback }) {
  const onTrigger = (event) => {
    parentCallback(event.target.name.value);
    event.preventDefault();
  };

  return (
    <div className="">
      <h1>This is Child to Parent Component</h1>

      <form onSubmit={onTrigger}>
        <input type="text" name="name" placeholder="Enter Name" />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <br />
        <br />
      </form>
    </div>
  );
}

ChildData.protoTypes = {
  onSubmit: PropTypes.func,
  onTrigger: PropTypes.string
};
