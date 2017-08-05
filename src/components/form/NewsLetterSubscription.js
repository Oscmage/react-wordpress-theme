import React, { Component } from "react";
import { subscribeToNewsLetter } from "./../../Actions";
import { connect } from "react-redux";

export class NewsLetterSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surname: "",
      email: "",
      validFirstName: false,
      validSurname: false,
      validEmail: false,
      visitedFirstName: false,
      visitedSurname: false,
      visitedEmail: false
    };
  }

  validateAndSend = event => {
    event.preventDefault();
    const { validEmail, validFirstName, validSurname } = this.state;
    const { onSubscribe } = this.props;

    if (validEmail && validFirstName && validSurname) {
      //onSubscribe(firstName, surname, email);
    }
  };

  validateEmail = () => {
    this.setState({
      validEmail: this.state.email.match(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/
      ),
      visitedEmail: true
    });
  };

  validateSurname = () => {
    this.setState({
      validSurname: this.state.surname.length >= 2,
      visitedSurname: true
    });
  };

  validateFirstName = () => {
    this.setState({
      validFirstName: this.state.firstName.length >= 2,
      visitedFirstName: true
    });
    console.log(this.state.validFirstName);
  };

  setInputEmail = evt => {
    this.setState({
      email: evt.target.value
    });
    if (this.state.visitedEmail) {
      this.validateEmail();
    }
  };

  setInputFirstName = evt => {
    this.setState({
      firstName: evt.target.value
    });
    if (this.state.visitedFirstName) {
      this.validateFirstName();
    }
  };

  setInputSurname = evt => {
    evt.target.setCustomValidity("");
    this.setState({
      surname: evt.target.value
    });
    if (this.state.visitedSurname) {
      this.validateSurname();
    }
  };

  renderLastNameInput = () => {
    const { validSurname, visitedSurname } = this.state;

    const inputField = (
      <input
        placeholder="Efternamn"
        className={
          visitedSurname && !validSurname
            ? "subscribe-input shake"
            : "subscribe-input"
        }
        name="surname"
        onInput={this.setInputSurname}
        onBlur={this.validateSurname}
        onInvalid={this.test}
        required
      />
    );
    if (!validSurname && visitedSurname) {
      return (
        <div className="wrapper-input-required">
          {inputField}
          <p key={1}>feeeeeeeeel</p>
        </div>
      );
    } else {
      return (
        <div className="wrapper-input-required">
          {inputField}
        </div>
      );
    }
  };

  renderFirstNameInput = () => {
    const { validFirstName, visitedFirstName } = this.state;

    const inputField = (
      <input
        placeholder="Förnamn"
        className={
          visitedFirstName && !validFirstName
            ? "subscribe-input shake"
            : "subscribe-input"
        }
        name="first_name"
        onInput={this.setInputFirstName}
        onBlur={this.validateFirstName}
        required
      />
    );

    if (!validFirstName && visitedFirstName) {
      return (
        <div className="wrapper-input-required">
          {inputField}
          <p>feeeeeeeeel2</p>
        </div>
      );
    } else {
      return (
        <div className="wrapper-input-required">
          {inputField}
        </div>
      );
    }
  };

  renderEmailInput = () => {
    const { validEmail, visitedEmail } = this.state;

    const inputField = (
      <input
        className={
          visitedEmail && !validEmail
            ? "subscribe-input shake"
            : "subscribe-input"
        }
        type="email"
        placeholder="Emilia@gmail.com"
        name="email"
        onInput={this.setInputEmail}
        onBlur={this.validateEmail}
        required
      />
    );

    if (!validEmail && visitedEmail) {
      return (
        <div className="wrapper-input-required">
          {inputField}
          <p>feeeeeeeeel3</p>
        </div>
      );
    } else {
      return (
        <div className="wrapper-input-required">
          {inputField}
        </div>
      );
    }
  };

  render() {
    return (
      <form
        className="subscription-form"
        onSubmit={this.validateAndSend}
        method="post"
      >
        {this.renderFirstNameInput()}
        {this.renderLastNameInput()}
        {this.renderEmailInput()}
        <button>subscribe</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubscribe: (firstName, surName, email) =>
    dispatch(subscribeToNewsLetter(firstName, surName, email))
});

export default connect(null, mapDispatchToProps)(NewsLetterSubscription);
