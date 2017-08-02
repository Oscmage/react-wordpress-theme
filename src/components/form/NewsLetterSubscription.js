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
      valid: true
    };
  }

  validateAndSend = event => {
    event.preventDefault();
    const { email, firstName, surname } = this.state;
    const { onSubscribe } = this.props;

    let valid = true;

    if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)) {
      //
      console.log("invalid email!");
      valid = false;
    }

    if (firstName.length < 2) {
      // Shake field
      valid = false;
      console.log("invalid firstName!");
    }

    if (surname.length < 2) {
      // shake field
      console.log("invalid surname!");
      valid = false;
    }

    if (valid) {
      onSubscribe(firstName, surname, email);
    }
  };

  setInputEmail = evt => {
    this.setState({
      email: evt.target.value
    });
  };

  setInputFirstName = evt => {
    this.setState({
      firstName: evt.target.value
    });
  };

  setInputSurname = evt => {
    this.setState({
      surname: evt.target.value
    });
  };

  render() {
    const { valid } = this.state;

    return (
      <form className="subscription-form" onSubmit={this.validateAndSend}>
        <input
          placeholder="Förnamn"
          name="first_name"
          onInput={this.setInputFirstName}
        />
        <input
          placeholder="Efternamn"
          name="surname"
          onInput={this.setInputSurname}
        />
        <input
          className={valid ? "subscribe-input" : "subscribe-input shake"}
          type="email"
          placeholder="Emilia@gmail.com"
          name="email"
          onInput={this.setInputEmail}
          required
        />
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
