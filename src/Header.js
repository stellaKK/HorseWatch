import React, { Component } from 'react';
import PopUp from './popUp.js';
import Content from './Content.js';
import './style/header.css';
import './style/header_mobile.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleBags = this.handleBags.bind(this);

    this.state = {
        isSignUp: true,
        isPopUp: false,
        bagNum: 0,
    };
  }
  
  handleClose(e) {
    // close the popBox
    // e is boolean
    this.setState({isPopUp: e});
  }
  
  handleSignUp() {
    this.setState({isSignUp: true, isPopUp: true});
  }
  
  handleLogin() {
    this.setState({isSignUp: false, isPopUp: true});
  }
  
  handleBags() {
    // add 1 for every operation
    this.setState((prevState, props) => ({
        bagNum: prevState.bagNum + 1}));
  }
  
  render() {
    // decide when to show a popBox
    let popBox;
    const isSignUp = this.state.isSignUp;
    if (this.state.isPopUp) {
        popBox = <PopUp action={isSignUp ? 'Sign Up' : 'Login'} showBox={this.handleClose} />;
    }

    return (
      <div>
        <header>
            <div className="user_profile">
                <div className="profile_block change_pointer" id="signUp" onClick={this.handleSignUp.bind(this)}>Sign Up</div>
                <div className="profile_block change_pointer" onClick={this.handleLogin.bind(this)}>Login</div>
            </div>
            
            <div className="neg_bar">
                <div id="title">THE HORSE</div>
                
                <div className="sub_titles">
                  <div className="block_elmt change_pointer">Time Tellers</div>
                  <div className="block_elmt change_pointer">Leather Goods</div>
                  <div className="block_elmt change_pointer">Liftstyle</div>
                </div>
                
                <div className="menu">
                    <div className="block_elmt change_pointer">Lookbook</div>
                    <div className="block_elmt change_pointer">Our Story</div>
                    <div className="block_elmt change_pointer">Bag (<span className="bag_num">{this.state.bagNum}</span>)</div>
                </div>
            </div>
        </header>
        
        <Content bagNum={this.handleBags} />
        {popBox}
      </div>
    );
  }
}

export default Header;
