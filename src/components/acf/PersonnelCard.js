import React, { Component } from "react";
import BackgroundImage from "./../BackgroundImage";

export default class PersonnelCard extends Component {
  render() {
    const { name, tel, image, email, role } = this.props;

    return (
      <div>
        <h2>
          {name}
        </h2>
        <BackgroundImage cssClass="personnel-image" url={image} />
        <p>
          Role: {role}
        </p>
        <p>
          Tel: {tel}
        </p>
        <p>
          Email: {email}
        </p>
      </div>
    );
  }
}
