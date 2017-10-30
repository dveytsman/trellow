import React from 'react';

class UserDropdown extends React.Component{
  constructor(props){
    super(props);

  }
}
const UserDropDown = ({currentUser, logout}) => {
  return(
    <div className='visdrop'>
      <p>{currentUser.username}</p>
      <ul className="dropdown-content">
        <li className="dropdown-content" onClick={() => logout()}>
            logout
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
