import React, { PureComponent } from "react";

import { connect } from "react-redux";
import baseurl from "./../BaseUrl";
import { receivedPost } from "./../Actions";
import Post from "./page/Post";

class PostFetcher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: null
    };
  }

  getSlug = pathname => {
    const path = pathname.slice(0, -1);
    const lastIndex = path.lastIndexOf("/");
    return path.slice(lastIndex + 1);
  };

  getPost = props => {
    const path = this.getSlug(props.location.pathname);

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
          this.props.onReceivedPost(post[0]);
          this.setState({ loading: false, id: post[0].id });
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  };

  componentWillMount() {
    this.getPost(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.location !== this.props.location) {
      this.getPost(newProps);
    }
  }

  render() {
    const { loading, id } = this.state;

    if (loading) {
      return <p>Loading</p>;
    }

    return (
      <div className="Post">
        <Post postId={id} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onReceivedPost: post => dispatch(receivedPost(post))
});

export default connect(null, mapDispatchToProps)(PostFetcher);
