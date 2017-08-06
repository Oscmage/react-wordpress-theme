import React, { Component } from "react";
import FeaturedImage from "./FeaturedImg";
import PageContent from "./PageContent";
import PersonnelCard from "./../acf/PersonnelCard";

export default class Golfbutiken extends Component {
  personnelCards = list => {
    const items = list.map(item => {
      console.log(item.name + item.tel);
      return (
        <PersonnelCard
          key={item.name + item.tel}
          tel={item.tel}
          email={item.email}
          name={item.name}
          role={item.roll}
        />
      );
    });
    return (
      <div className="personnel-wrapper">
        {items}
      </div>
    );
  };

  render() {
    const { page } = this.props;
    const featuredImage = page.better_featured_image;
    const list = page.acf.repeater;
    // TODO: DO SOMETHING
    console.log(page);

    return (
      <div className="App">
        {featuredImage && <FeaturedImage featuredImage={featuredImage} />}
        <PageContent content={page.content.rendered} />
        {this.personnelCards(list)}
      </div>
    );
  }
}
