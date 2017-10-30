import React from 'react';

class UserDropdown extends React.Component{
  constructor(props){
    super(props);
    
  }
}
const UserDropDown = ({currentUser, logout}) => {
  return(
    <div>
      <p>{currentUser.username}</p>
      <ul className="dropdown-content">
        <li className="dropdown-content" onClick={() => logout()}>
          <a>
            <div>logout</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
