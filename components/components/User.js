export default function User({name,email, phone, city }) {
   
    return (
        <div>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <hr />
      </div>
    );
  }
  