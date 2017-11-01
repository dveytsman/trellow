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
          <BoardIndexContainer/>

        </div>
      );

    }else {
      return null;
    }
  }
}
export default Boards;
