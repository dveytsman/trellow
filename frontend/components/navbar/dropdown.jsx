import React from 'react';

const Dropdown = ({visible, hideDropdown, name, className, children}) => {
  if(visible){
    return(
      <div className={`${name} ${className}`}>
        {children}
      </div>
    );
  } else{
    return null;
  }
};

export default Dropdown;
