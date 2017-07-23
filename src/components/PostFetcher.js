import React, { Component } from "react";

import { connect } from "react-redux";
import baseurl from "./../BaseUrl";
import { receivedPost } from "./../Actions";
import Post from "./page/Post";

class PostFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null
    };
  }

  getSlug = () => {
    const path = this.props.location.pathname.slice(0, -1);
    const lastIndex = path.lastIndexOf("/");
    return path.slice(lastIndex + 1);
  };

  componentWillMount() {
    const path = this.getSlug();

    fetch(baseurl + "/wp-json/wp/v2/posts?slug=" + path)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        // Examine the text in the response
        response.json().then(post => {
          console.log(post[0].id);
          this.props.onReceivedPost(post[0]);
          this.setState({ loading: false, id: post[0].id });
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
    //Senare set loading
    //Resultat ta bort loading
    //Error visa error
  }

  render() {
    const { loading } = this.state;
    const { post } = this.props;

    if (loading) {
      return <p>Loading</p>;
    }

    console.log("post", post);
    return (
      <div className="Post">
        <Post post={post} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  post: state.posts.posts[props.id]
});

const mapDispatchToProps = dispatch => ({
  onReceivedPost: post => dispatch(receivedPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostFetcher);
