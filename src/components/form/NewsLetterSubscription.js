import React, { Component } from "react";
import { subscribeToNewsLetter } from "./../../Actions";
import { connect } from "react-redux";

export class NewsLetterSubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valid: true
    };
  }

  validateAndSend = event => {
    event.preventDefault();
    const { value } = this.state;
    const { onSubscribe } = this.props;

    console.log("whohow");
    if (value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/)) {
      onSubscribe();
    }
  };

  setInputValue = evt => {
    this.setState({
      value: evt.target.value
    });
  };

  render() {
    const { valid } = this.state;

    return (
      <form className="subscription-form" onSubmit={this.validateAndSend}>
        <input
          className={valid ? "subscribe-input" : "subscribe-input shake"}
          type="email"
          placeholder="Emilia@gmail.com"
          name="email"
          onInput={this.setInputValue}
          required
        />
        <button>subscribe</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubscribe: () => dispatch(subscribeToNewsLetter())
});

export default connect(null, mapDispatchToProps)(NewsLetterSubscription);
