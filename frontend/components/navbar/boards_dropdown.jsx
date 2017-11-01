import React from 'react';
import {showBoardDropdown} from '../../actions/dropdown_actions';
import BoardIndexContainer from '../boards/board_index_container';

class BoardDropdown extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
      return(
        <div>
          <ul>
            <li>
              <BoardIndexContainer />
            </li>
          </ul>
        </div>
      );
    }
}
export default BoardDropdown;
