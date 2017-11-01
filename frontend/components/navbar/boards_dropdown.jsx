import React from 'react';
import {showBoardDropdown} from '../../actions/dropdown_actions';
import BoardIndexContainer from '../boards/board_index_container';
import DropdownContainer from './dropdown_container';
import CreateBoardContainer from '../boards/create_board_container';

class BoardDropdown extends React.Component{
  constructor(props){
    super(props);
    this.toggleDropDown.bind(this);
  }

  toggleDropDown(name){
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
    this.props.showDropdown(name);
    // this.setState({
    //   dropdownVisible: true
    // });
    };
  }

  render(){
      return(
        <div>
          <ul>
            <li>
              <BoardIndexContainer />
                <div className="droppy" onClick={this.toggleDropDown('dropdown-create') }>
                  <DropdownContainer name="dropdown-create">
                    <CreateBoardContainer />
                  </DropdownContainer>
                </div>
            </li>
          </ul>
        </div>
      );
    }
}
export default BoardDropdown;
