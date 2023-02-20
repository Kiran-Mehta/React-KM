export default function Child({ firstNameColor, lastNameColor }) {
  //const { firstnamecolor, lastnamecolor } = props;
  return (
    <div className="">
      <h1>This is Child Component</h1>

      <h1 style={{ color: firstNameColor }}>Kiran</h1>
      <h1 style={{ color: lastNameColor }}>Mehta</h1>
    </div>
  );
}
