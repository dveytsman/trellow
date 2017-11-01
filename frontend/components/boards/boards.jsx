import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import BoardIndexContainer from './board_index_container';
import CreateBoardContainer from './create_board_container';
import DropdownContainer from '../navbar/dropdown_container';
class Boards extends React.Component{
  constructor(props){
    super(props);
    this.toggleDropDown = this.toggleDropDown.bind(this);
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

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    
  }


  render(){
    if(this.props.loggedIn){
      return(
        <div className="main" onClick={() => this.props.hideDropdown()}>
          <NavbarContainer/>
          <h1>logged {this.props.currentUser.username}</h1>
          <button onClick={this.handleLogout.bind(this)}>Log out</button>
          <BoardIndexContainer/>
          <div className="board-items" onClick={this.toggleDropDown('dropdown-create') }>
            <DropdownContainer name="dropdown-create">
              <CreateBoardContainer />
            </DropdownContainer>
          </div>
        </div>
      );

    }else {
      return null;
    }
  }
}
export default Boards;
