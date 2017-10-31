import React from 'react';
import {showBoardDropdown} from '../../actions/dropdown_actions';

class BoardDropdown extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
      return(
        <div>
          <ul>
            <li>
              sample board
            </li>
          </ul>
        </div>
      );
    }
}
export default BoardDropdown;
