import React, { Component } from 'react';
import './style/popUp.css';
import './style/popUp_mobile.css';

class PopUp extends Component {
  state = {
      form_err: false,
  };

  closeBox() {
    this.props.showBox(false);
  }
  
  // for now, show error message for every submission of form
  submitForm() {
    this.setState({form_err: true});
  }

  render() {
    let err;
    if (this.state.form_err) {
      err = <div className="err_msg">Invalid username or password.</div>;
    }

    return (
        <div className="popUp" id="popBox">
          <form className="box">
            <div className="form_title">{this.props.action}</div>
            {err}
            User Name:
            <input type="text" name="username" />
            Password:
            <input type="password" name="password" />
            <button type="button" onClick={this.submitForm.bind(this)} className="button form_btn">{this.props.action}</button>
            <div className="close change_pointer" onClick={this.closeBox.bind(this)}>&times;</div>
          </form>
        </div>
    );
  }
}

export default PopUp;
