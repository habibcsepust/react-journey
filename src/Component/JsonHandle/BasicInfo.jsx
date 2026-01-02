import App from "../../App";
import User from './User.jsx';

const users = [
    {
        "Name" : "Habibur Rahman",
        "Email" : "habibcsepust@gmail.com",
        Phones: [
            {
                "Mobile": "0130768724",
                "Office": "01842345630"
            },
            {
                "Age": "30",
            },
            {
                "DOB": "20 Oct 1994",
            }
        ],
        "Gender":"Male"
    },
    {
        "Name" : "Tasnim Akter Juthi",
        "Email" : "tasnim@gmail.com",
        Phones: [
            {
                "Mobile": "0130768774",
                "Office": "01842345674"
            },
            {
                "Age": "30",
            },
            {
                "DOB": "20 Oct 1994",
            }
        ],
        "Gender":"Female"
    },
    {
        "Name" : "Haidar Ali",
        "Email" : "haidar@gmail.com",
        Phones: [
            {
                "Mobile": "0130768784",
                "Office": "01842345684"
            },
            {
                "Age": "30",
            },
            {
                "DOB": "20 Oct 1994",
            }
        ],
        "Gender":"Male"
    },
    {
        "Name" : "Yameen Sajid",
        "Email" : "yameensajid@gmail.com",
        Phones: [
            {
                "Mobile": "0130768740",
                "Office": "01842345640"
            },
            {
                "Age": "30",
            },
            {
                "DOB": "20 Oct 1994",
            }
        ],
        "Gender":"Male"
    }
]


function BasicInfo() {
  let items = [];
  items = users.map((user, index)=>(<User key={index} Name = {user.Name} Email={user.Email} Gender={user.Gender} Phones={user.Phones} />))

  
  return (
    <div className='BasicInfo'>
      {items}
    </div>
  );
}

export default BasicInfo;