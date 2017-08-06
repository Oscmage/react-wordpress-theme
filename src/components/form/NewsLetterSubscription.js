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
    } else {
      this.validateFirstName();
      this.validateSurname();
      this.validateEmail();
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
  };

  setInputEmail = evt => {
    evt.target.setCustomValidity("");
    this.setState({
      email: evt.target.value
    });
    if (this.state.visitedEmail) {
      this.validateEmail();
    }
  };

  setInputFirstName = evt => {
    evt.target.setCustomValidity("");
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
        placeholder="Efternamn *"
        className={this.getClass(visitedSurname, validSurname)}
        name="surname"
        onInput={this.setInputSurname}
        onBlur={this.validateSurname}
        onInvalid={this.test}
        required
      />
    );
    return this.renderRequiredField(
      validSurname,
      visitedSurname,
      inputField,
      "Last name needs to be longer"
    );
  };

  renderFirstNameInput = () => {
    const { validFirstName, visitedFirstName } = this.state;

    const inputField = (
      <input
        placeholder="Förnamn *"
        className={this.getClass(visitedFirstName, validFirstName)}
        name="first_name"
        onInput={this.setInputFirstName}
        onBlur={this.validateFirstName}
        required
      />
    );
    return this.renderRequiredField(
      validFirstName,
      visitedFirstName,
      inputField,
      "First name needs to be longer"
    );
  };

  getClass = (visited, valid) => {
    if (visited) {
      if (valid) {
        return "subscribe-input ok";
      } else {
        return "subscribe-input shake";
      }
    }
    return "subscribe-input";
  };

  renderEmailInput = () => {
    const { validEmail, visitedEmail } = this.state;

    const inputField = (
      <input
        className={this.getClass(visitedEmail, validEmail)}
        type="email"
        placeholder="Emilia@gmail.com *"
        name="email"
        onInput={this.setInputEmail}
        onBlur={this.validateEmail}
        required
      />
    );
    return this.renderRequiredField(
      validEmail,
      visitedEmail,
      inputField,
      "Bad email address"
    );
  };

  renderRequiredField = (valid, visited, inputField, invalidMessage) => {
    if (!valid && visited) {
      return (
        <div className="wrapper-input-required">
          <div className="wrapper-input-required-inner">
            {inputField}
          </div>
          <p>
            {invalidMessage}
          </p>
        </div>
      );
    } else {
      return (
        <div className="wrapper-input-required">
          <div className="wrapper-input-required-inner">
            {inputField}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <form
        className="subscription-form"
        onSubmit={this.validateAndSend}
        noValidate
      >
        <h3>Anmälan nyhetsbrev</h3>
        {this.renderFirstNameInput()}
        {this.renderLastNameInput()}
        {this.renderEmailInput()}
        <div>
          <button>Prenumerera</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubscribe: (firstName, surName, email) =>
    dispatch(subscribeToNewsLetter(firstName, surName, email))
});

export default connect(null, mapDispatchToProps)(NewsLetterSubscription);
