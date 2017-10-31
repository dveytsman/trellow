import React from 'react';

const Dropdown = ({visible, hideDropdown, name, children}) => {
  if(visible){
    return(
      <div className={`${name}`}>
        {children}
      </div>
    );
  } else{
    return null;
  }
};

export default Dropdown;
