import React, { Component } from "react";

import { connect } from "react-redux";
import NewsLetterSubscription from "./components/form/NewsLetterSubscription";

var pgaUrl = require("./img/PGA.jpg");
var academyUrl = require("./img/GolfAcademy1.jpg");

class Footer extends Component {
  render() {
    const { loading } = this.props;

    if (!loading) {
      return (
        <footer id="page-footer">
          <div className="footer-wrapper">
            <div className="footer-container">
              <NewsLetterSubscription />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 oijared-container">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 container-shop-email small-padding-top-bottom">
                <h4>Öijared Golfshop</h4>
                <div className="image-container">
                  <img alt="Golf PGA logo" src={pgaUrl} />
                </div>
                <p>Mån-tors: </p>
                <p>Fre-sön: </p>
                <a href="mailto:shopen@oijared.se?subject=Hej Shoppen!">
                  Maila oss
                </a>
                <hr />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 container-academy-email small-padding-top-bottom">
                <h4>Öijared Golf Academy</h4>
                <div className="image-container">
                  <img alt="Öijared Golf Academy logo" src={academyUrl} />
                </div>
                <a href="mailto:oijaredgolfacademy@gmail.com?subject=Hej Öijared golf academy!">
                  Maila om utbildning
                </a>
                <hr />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 small-padding-top-bottom">
                <h4>Öijared Driving Range</h4>
                <div className="image-container">
                  <img alt="Öijared Golf Academy logo" src={academyUrl} />
                </div>
                <p>
                  Öppet dygnet runt, <br /> förutom sön kl x till mån kl y{" "}
                </p>
                <hr />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 container-general-info small-padding-top-bottom">
              <h4>Unified Golf AB </h4>
              <p>Öijaredsv 59, 448 92 FLODA</p>
              <p>bg: 59952-1718</p>
              <p> Swish: 123 209 32 68</p>
              <p>org nr: 556519-3769</p>
              <a href="tel:+46030237320">+46 (0)302-373 20</a>
            </div>
          </div>
        </footer>
      );
    }
    return null;
  }
}
const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Footer);
