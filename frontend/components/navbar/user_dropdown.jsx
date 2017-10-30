import React from 'react';

const UserDropDown = ({currentUser, logout}) => {
  return(
    <div>
      <p>{currentUser.username}</p>
      <ul>
        <li onClick={() => logout()}>
          <a>
            <div>logout</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
