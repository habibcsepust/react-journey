import './BasicInfo.jsx';

const User = (props) => {
  const { Name, Email, Gender, Phones } = props;
  console.log("Phones: "+Phones);

  return (
    <div className="user">
      <h2>{Name}</h2>
      <p>Email: {Email}</p>
      <p>Gender: {Gender}</p>

      <h4>Other Info:</h4>

      {Phones.map((item, index) => (
        <div key={index}>
          {Object.keys(item).map((key) => (
            <p key={key}>
              {key} : {item[key]}
            </p>
          ))}
        </div>
      ))}

      <hr />
    </div>
  );
};

export default User;
